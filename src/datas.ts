import { manipulateDirectly, manipulateLinearly } from "./manipulator";

// interface AnimatedElement {
//   id: string;
//   type: string;
//   scrollBoundary: {
//     a1Start: number;
//     a1End: number;
//     a2Start?: number;
//     a2End?: number;
//   };
//   keyframeDatas: {
//     a1: Array<{
//       name: string;
//       from: number;
//       to: number;
//     }>;
//     a2?: Array<{
//       name: string;
//       from: number;
//       to: number;
//     }>;
//   };
// }

// export interface OnewayAnimatedElement extends AnimatedElement {
//   handleNotReached: (dom: HTMLElement) => void;
//   a1: (dom: HTMLElement, scrollY: number) => void;
//   handlePassed: (dom: HTMLElement) => void;
// }

// export interface CycleAnimatedElement extends OnewayAnimatedElement {
//   handleStaticVisible: (dom: HTMLElement) => void;
//   a2: (dom: HTMLElement, scrollY: number) => void;
// }

export const initialAnimatedElements: any = [
  {
    id: "intro-beyondWords",
    type: "oneway",
    scrollBoundary: {
      a1Start: 0,
      a1End: 240,
    },
    keyframeDatas: {
      a1: [
        { name: "opacity", from: 1, to: 0 },
        { name: "scale", from: 1, to: 0.9 },
      ],
    },
  },
  // {
  //   id: "intro-mouseWheelIcon",
  //   type: "oneway",
  //   scrollBoundary: {
  //     a1Start: 50,
  //     a1End: 60,
  //   },
  //   keyframeDatas: {
  //     a1: [{ name: "opacity", from: 1, to: 0 }],
  //   },
  // },
  // {
  //   id: "intro-ipad",
  //   type: "cycle",
  //   scrollBoundary: {
  //     a1Start: 1550,
  //     a1End: 1790,
  //     a2Start: 2700,
  //     a2End: 2960,
  //   },
  //   keyframeDatas: {
  //     a1: [
  //       { name: "opacity", from: 0, to: 1 },
  //       {
  //         name: "translateY",
  //         from: 7,
  //         to: 0,
  //       },
  //     ],
  //     a2: [
  //       { name: "opacity", from: 1, to: 0 },
  //       {
  //         name: "translateY",
  //         from: 0,
  //         to: -3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "intro-thefirst",
  //   type: "cycle",
  //   scrollBoundary: {
  //     a1Start: 2120,
  //     a1End: 2390,
  //     a2Start: 2700,
  //     a2End: 2960,
  //   },
  //   keyframeDatas: {
  //     a1: [
  //       { name: "opacity", from: 0, to: 1 },
  //       {
  //         name: "translateY",
  //         from: 7,
  //         to: 0,
  //       },
  //     ],
  //     a2: [
  //       { name: "opacity", from: 1, to: 0 },
  //       {
  //         name: "translateY",
  //         from: 0,
  //         to: -3,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "intro-access",
  //   type: "cycle",
  //   scrollBoundary: {
  //     a1Start: 4200,
  //     a1End: 4590,
  //     a2Start: 5120,
  //     a2End: 5480,
  //   },
  //   keyframeDatas: {
  //     a1: [
  //       { name: "opacity", from: 0, to: 1 },
  //       {
  //         name: "translateY",
  //         from: 5,
  //         to: 0,
  //       },
  //     ],
  //     a2: [
  //       { name: "opacity", from: 1, to: 0 },
  //       {
  //         name: "translateY",
  //         from: 0,
  //         to: -10,
  //       },
  //     ],
  //   },
  // },
  // {
  //   id: "intro-creation",
  //   type: "cycle",
  //   scrollBoundary: {
  //     a1Start: 4330,
  //     a1End: 4670,
  //     a2Start: 5120,
  //     a2End: 5480,
  //   },
  //   keyframeDatas: {
  //     a1: [
  //       { name: "opacity", from: 0, to: 1 },
  //       {
  //         name: "translateY",
  //         from: 5,
  //         to: 0,
  //       },
  //     ],
  //     a2: [
  //       { name: "opacity", from: 1, to: 0 },
  //       {
  //         name: "translateY",
  //         from: 0,
  //         to: -10,
  //       },
  //     ],
  //   },
  // },
];

export function getDomDatas() {
  const result = initialAnimatedElements.map((iAE: any) => {
    if (iAE.type === "oneway") {
      const handleNotReached = (dom: HTMLElement) => {
        iAE.keyframeDatas.a1.forEach((a: any) => {
          manipulateDirectly(dom, a.name, a.from);
        });
      };
      const a1 = (dom: HTMLElement, scrollY: number) => {
        const {
          scrollBoundary: { a1Start, a1End },
          keyframeDatas: { a1 },
        } = iAE;
        a1.forEach((a: any) => {
          manipulateLinearly(dom, scrollY, a.name, [a1Start, a1End], [a.from, a.to]);
        });
      };
      const handlePassed = (dom: HTMLElement) => {
        iAE.keyframeDatas.a1.forEach((a: any) => {
          manipulateDirectly(dom, a.name, a.to);
        });
      };
      const onewayDomData = { ...iAE, handleNotReached, a1, handlePassed };
      return onewayDomData;
    } else {
      // type cycle
      const handleNotReached = (dom: HTMLElement) => {
        iAE.keyframeDatas.a1.forEach((a: any) => {
          manipulateDirectly(dom, a.name, a.from);
        });
      };
      const a1 = (dom: HTMLElement, scrollY: number) => {
        iAE.keyframeDatas.a1.forEach((a: any) => {
          manipulateLinearly(
            dom,
            scrollY,
            a.name,
            [iAE.scrollBoundary.a1Start, iAE.scrollBoundary.a1End],
            [a.from, a.to]
          );
        });
      };
      const handleStaticVisible = (dom: HTMLElement) => {
        iAE.keyframeDatas.a1.forEach((a: any) => {
          manipulateDirectly(dom, a.name, a.to);
        });
      };
      const a2 = (dom: HTMLElement, scrollY: number) => {
        iAE.keyframeDatas.a2.forEach((a: any) => {
          manipulateLinearly(
            dom,
            scrollY,
            a.name,
            [iAE.scrollBoundary.a2Start, iAE.scrollBoundary.a2End],
            [a.from, a.to]
          );
        });
      };
      const handlePassed = (dom: HTMLElement) => {
        iAE.keyframeDatas.a2.forEach((a: any) => {
          manipulateDirectly(dom, a.name, a.to);
        });
      };
      const cycleDomData = {
        ...iAE,
        handleNotReached,
        a1,
        handleStaticVisible,
        a2,
        handlePassed,
      };
      return cycleDomData;
    }
  });
  return result;
}

// // User can modify above code.
//     // Below is automatically calculated.
//     handleNotReached: function (dom: HTMLElement) {
//       // console.log("11", this);
//       k_opacityDirectly(dom, this.values.a1.opacity[0]);
//       k_translateYDirectly(dom, this.values.a1.opacity[0]);
//     },
//     a1(dom: HTMLElement, scrollY: number) {
//       console.log("bb", this);
//       // const {
//       //   interval: { a1Start, a1End },
//       //   values: { a1 },
//       // } = this;
//       // k_opacity(dom, scrollY, [a1Start, a1End], [a1.opacity[0], a1.opacity[1]]);
//       // k_translateY(dom, scrollY, [a1Start, a1End], [a1.translateY[0], a1.translateY[1]]);
//       k_opacity(
//         dom,
//         scrollY,
//         [this.interval.a1Start, this.interval.a1End],
//         [this.values.a1.opacity[0], this.values.a1.opacity[1]]
//       );
//       k_translateY(
//         dom,
//         scrollY,
//         [this.interval.a1Start, this.interval.a1End],
//         [this.values.a1.translateY[0], this.values.a1.translateY[1]]
//       );
//     },
//     handleStaticVisible(dom: HTMLElement) {
//       k_opacityDirectly(dom, this.values.a1.opacity[1]);
//       k_translateYDirectly(dom, this.values.a1.translateY[1]);
//     },
//     a2(dom: HTMLElement, scrollY: number) {
//       const {
//         interval: { a2Start, a2End },
//         values: { a2 },
//       } = this;
//       k_opacity(dom, scrollY, [a2Start, a2End], [a2.opacity[0], a2.opacity[1]]);
//       k_translateY(dom, scrollY, [a2Start, a2End], [a2.translateY[0], a2.translateY[1]]);
//     },
//     handlePassed(dom: HTMLElement) {
//       k_opacityDirectly(dom, this.values.a2.opacity[1]);
//       k_translateYDirectly(dom, this.values.a2.translateY[1]);
//     },

// export const domDatas = [
//   // "intro-beyondWords": {
//   //   domId: "intro-beyondWords",
//   //   interval: {
//   //     foStart: 0,
//   //     foEnd: 240,
//   //   },
//   //   animations: {
//   //     fadeout: [
//   //       { name: "transform", value: [1, 0] },
//   //       { name: "opacity", value: [1, 0] },
//   //     ],
//   //   },
//   // },
//   // {
//   //   domId: "intro-mouseWheelIcon",
//   //   interval: [50, 240],
//   //   animations: [{ name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [1, 0] }],
//   // },
//   {
//     id: "intro-ipad",
//     type: "cycle", // oneway, cycle
//     interval: [1550, 1790, 2700, 2960],
//     animations: {
//       handleNotReached: (dom: HTMLElement) => {
//         translateYDirectly(dom, 7);
//         opacityDirectly(dom, 0);
//       },
//       a1: (dom: HTMLElement, scrollY: number) => {
//         translateY(dom, scrollY, [1550, 1790], [7, 0]);
//         opacity(dom, scrollY, [1550, 1790], [0, 1]);
//       },
//       handleStaticVisible: (dom: HTMLElement) => {
//         translateYDirectly(dom, 0);
//         opacityDirectly(dom, 1);
//       },
//       a2: (dom: HTMLElement, scrollY: number) => {
//         translateY(dom, scrollY, [2700, 2960], [0, -3]);
//         opacity(dom, scrollY, [2700, 2960], [1, 0]);
//       },
//       handlePassed: (dom: HTMLElement) => {
//         translateYDirectly(dom, -3);
//         opacityDirectly(dom, 0);
//       },
//     },
//     // fadein: [
//     //   { name: "transform", value: [7, 0] },
//     //   { name: "opacity", value: [0, 1] },
//     // ],
//     // fadeout: [
//     //   { name: "transform", value: [0, -3] },
//     //   { name: "opacity", value: [1, 0] },
//     // ],
//   },
//   // {
//   //   domId: "intro-thefirst",
//   //   interval: [2120, 2390],
//   //   animations: [
//   //     { name: "transform", timingFunc: linearEquation, getValue: returnTranslateY, value: [7, 0] },
//   //     { name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [0, 1] },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-ipad",
//   //   interval: [2700, 2960],
//   //   animations: [
//   //     { name: "transform", timingFunc: linearEquation, getValue: returnTranslateY, value: [0, -3] },
//   //     { name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [1, 0] },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-thefirst",
//   //   interval: [2700, 2960],
//   //   animations: [
//   //     { name: "transform", timingFunc: linearEquation, getValue: returnTranslateY, value: [0, -3] },
//   //     { name: "opacity", timingFunc: linearEquation, getValue: returnSelf, value: [1, 0] },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-access",
//   //   interval: [4200, 4590],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
//   //     { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-creation",
//   //   interval: [4330, 4670],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
//   //     { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-mobility",
//   //   interval: [4330, 4670],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
//   //     { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-camera",
//   //   interval: [4330, 4670],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [5, 0] },
//   //     { name: "opacity", value: [0, 1], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-access",
//   //   interval: [5120, 5480],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
//   //     { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-creation",
//   //   interval: [5120, 5480],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
//   //     { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-mobility",
//   //   interval: [5120, 5480],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
//   //     { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
//   // {
//   //   domId: "intro-camera",
//   //   interval: [5120, 5480],
//   //   animations: [
//   //     { name: "transform", timingFunc: quadraticEquation, getValue: returnTranslateY, value: [0, -5] },
//   //     { name: "opacity", value: [1, 0], timingFunc: linearEquation, getValue: returnSelf },
//   //   ],
//   // },
// ];

export const sectionDatas = [
  {
    id: "intro",
    name: "Ipad",
    size: 6,
    scrollBoundary: [0, 6],
  },
  { id: "features", name: "Features", size: 19, scrollBoundary: [6, 25] },
  { id: "useCases", name: "Use Cases", size: 15, scrollBoundary: [25, 40] },
  { id: "contact", name: "Contact", size: 1, scrollBoundary: [40, 41] },
  { id: "about", name: "About", size: 1, scrollBoundary: [41, 42] },
];
