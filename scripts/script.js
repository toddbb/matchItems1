import { Config } from "./modules/config/config.mjs";
import * as Utils from "./modules/utilities/utils.mjs";

const Dom = {
   els: {},

   init() {
      this.els.rows = document.querySelectorAll(".row");
      this.els.container = document.querySelector(".container");
   },
};

const GameControl = {
   state: {
      leftItemSelected: {
         el: null,
         row: null,
      },
      rightMatchSelected: {
         el: null,
         row: null,
      },
   },

   getLeftItem(rowNum) {
      const el = Dom.els.rows[rowNum].querySelector(".left-item");
      return {
         el: el,
         text: el.textContent.trim(),
      };
   },

   getRightMatch(rowNum) {
      const el = Dom.els.rows[rowNum].querySelector(".right-match");
      return {
         el: el,
         text: el.textContent.trim(),
      };
   },

   getMiddleGap(rowNum) {
      const el = Dom.els.rows[rowNum].querySelector(".middle-gap");
      return {
         el: el,
      };
   },

   getRowIndex(rowEl) {
      // get the data-row attribute and convert to number
      return Number(rowEl.getAttribute("data-row"));
   },

   setSelected(rowIndex, leftItemEl) {
      GameControl.state.leftItemSelected = { el: null, row: null };
      // remove selected class from all left items
      Dom.els.rows.forEach((row) => {
         const item = GameControl.getLeftItem(this.getRowIndex(row));
         Utils.removeClass(item.el, "selected");
      });

      if (!leftItemEl) return;
      // add selected class to the clicked item
      Utils.addClass(leftItemEl, "selected");
      // add middle gap
      const middleGap = this.getMiddleGap(rowIndex).el;
      Utils.removeClass(middleGap, "nodisplay");
      // update state
      GameControl.state.leftItemSelected = { el: leftItemEl, row: rowIndex };
   },

   setMatchesSelectable(isSet = false) {
      Dom.els.rows.forEach((row) => {
         const rightMatch = GameControl.getRightMatch(this.getRowIndex(row));
         if (!isSet) Utils.removeClass(rightMatch.el, "selectable");
         else Utils.addClass(rightMatch.el, "selectable");
      });
   },

   addAnimationSwap(rowIndexLeft, rowIndexRight, rightMatch_Clicked, rightMatch_Swap, middleGap) {
      // add animation that will move the right items up or down, depending on the position
      // calculate the distance between the two rows
      const rowEl_Right = Dom.els.rows[rowIndexRight];
      const rowEl_Left = Dom.els.rows[rowIndexLeft];
      const rect_Right = rowEl_Right.getBoundingClientRect();
      const rect_Left = rowEl_Left.getBoundingClientRect();
      const distance = rect_Left.top - rect_Right.top;
      console.log({ rect_Right, rect_Left, distance });

      // animate the rightMatch_Clicked element to move to the leftItem position
      rightMatch_Clicked.style.transition = "transform 0.5s ease";
      rightMatch_Clicked.style.transform = `translateY(${distance}px)`;

      // animate the rightMatch_Swap element to move to the rightMatch_Clicked position
      rightMatch_Swap.style.transition = "transform 0.5s ease";
      rightMatch_Swap.style.transform = `translateY(${-distance}px)`;
      // after the animation, reset the transform and transition
      setTimeout(() => {
         rightMatch_Clicked.style.transition = "";
         rightMatch_Clicked.style.transform = "";
         rightMatch_Swap.style.transition = "";
         rightMatch_Swap.style.transform = "";
         // hide middle gap
         Utils.addClass(middleGap, "nodisplay");
      }, 500);
   },

   moveRightMatchToLeft(rowIndexRight, rightMatchEl) {
      console.log("Moving right match to left:", { rowIndexRight, rightMatchEl });

      if (!this.state.leftItemSelected.el) return;

      /// move the right match to rowEl
      const rowIndexLeft = this.state.leftItemSelected.row;
      const leftItem = this.getLeftItem(this.state.leftItemSelected.row).el;
      const rightMatch_Clicked = rightMatchEl;
      const rightMatch_Swap = this.getRightMatch(this.state.leftItemSelected.row).el;
      const middleGap = this.getMiddleGap(this.state.leftItemSelected.row).el;

      console.log({ leftItem, rightMatch_Clicked, rightMatch_Swap, middleGap });

      // swap the text content of the
      const clickedText = rightMatch_Clicked.textContent;
      const swapText = rightMatch_Swap.textContent;
      rightMatch_Swap.textContent = clickedText;
      rightMatch_Clicked.textContent = swapText;

      // if the rows are different, animate the swap
      if (rowIndexLeft !== rowIndexRight) {
         this.addAnimationSwap(rowIndexLeft, rowIndexRight, rightMatch_Clicked, rightMatch_Swap, middleGap);
      } else {
         // hide middle gap
         Utils.addClass(middleGap, "nodisplay");
      }

      // remove selectable class from all right items
      this.setMatchesSelectable(false);

      // remove selected class from left item
      Utils.removeClass(leftItem, "selected");

      // reset state
      this.state.leftItemSelected = { el: null, row: null };
      this.setMatchesSelectable(false);
   },

   handleClick(rowEl, leftItem, rightMatch) {
      const rowIndex = this.getRowIndex(rowEl);
      // console.log("Clicked:", { rowIndex, leftItem, rightMatch });
      if (leftItem) {
         if (Utils.hasClass(leftItem, "selected")) {
            this.setSelected(null, null);
            this.setMatchesSelectable(false);
         } else {
            this.setSelected(rowIndex, leftItem);
            this.setMatchesSelectable(true);
         }
      } else if (rightMatch) {
         this.moveRightMatchToLeft(rowIndex, rightMatch);
      }
   },

   init: () => {
      Utils.log("GameControl initialized", Utils.ENUM.LOG.INIT);
      // init the first item as selected
      //const firstLeftItem = GameControl.getLeftItem(0);
      //Utils.addClass(firstLeftItem.el, "selected");
      // init all match items as selectable
      /* Dom.els.rows.forEach((row, index) => {
         const rightMatch = GameControl.getRightMatch(index);
         Utils.addClass(rightMatch.el, "selectable");
      }); */

      // event listeners
      Dom.els.container.addEventListener("click", (e) => {
         const row = e.target.closest(".row");
         if (!row) return;
         const leftItem = e.target.closest(".left-item");
         const rightMatch = e.target.closest(".right-match");
         GameControl.handleClick(row, leftItem, rightMatch);
      });
   },
};

/**
 * Function: init
 *
 * Initializes the DOM after it is loaded
 */
const initAfterDOM = () => {
   Utils.log("Initializing application after DOM load", Utils.ENUM.LOG.INIT);
   Dom.init();
   GameControl.init();

   if (Config.DEV_MODE) {
      import("./modules/utilities/debug.mjs").then(({ Debug }) => {
         Debug.init();
         window.Config = Config;
         window.Dom = Dom;
         window.GameControl = GameControl;
      });
   }
};

/**
 * Function: init
 * Initializes before the DOM is loaded
 */
const init = () => {
   Utils.log("Initializing application before DOM load", Utils.ENUM.LOG.INIT);
};

document.addEventListener("DOMContentLoaded", () => initAfterDOM());
init();
