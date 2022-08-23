import * as React from "react";

const IconDollar = (propsDollar) => (
  <svg
    width={propsDollar.widthDollar}
    height={propsDollar.heightDollar}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.08V21m4.154-13.846c-.95-.949-2.62-1.608-4.154-1.65l4.154 1.65Zm-8.308 9c.893 1.19 2.552 1.868 4.154 1.926l-4.154-1.926ZM12 5.504c-1.826-.049-3.461.778-3.461 3.034 0 4.154 7.615 2.077 7.615 6.231 0 2.37-2.027 3.387-4.154 3.31V5.504Zm0 0V3v2.504Z"
      stroke={propsDollar.colorDollar}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChat = (propsChat) => (
  <svg
    width={propsChat.widthChat}
    height={propsChat.heightChat}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12v3m-3-3h3-3Zm6 0h-3 3Zm-3 0V9v3ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.954 9.954 0 0 0 12 22v0Z"
      stroke={propsChat.colorChat}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconTrophy = (propsTrophy) => (
  <svg
    width={propsTrophy.widthTrophy}
    height={propsTrophy.heightTrophy}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.744 4h10.568s-.88 13.257-5.284 13.257c-2.15 0-3.46-3.164-4.239-6.4C6.975 7.468 6.744 4 6.744 4Z"
      stroke={propsTrophy.colorTrophy}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.313 4s.92-.983 1.687-1c1.5-.034 1.777 1 1.777 1 .294.61.529 2.194-.88 3.657-1.41 1.463-2.987 2.743-3.63 3.2M6.745 4S5.785 3.006 5 3c-1.5-.012-1.777 1-1.777 1-.294.61-.529 2.194.88 3.657a29.895 29.895 0 0 0 3.687 3.2M8.508 20c0-1.83 3.522-2.743 3.522-2.743s3.523.914 3.523 2.743H8.508Z"
      stroke="#3058A5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGrid = (propsGrid) => (
  <svg
    width={propsGrid.widthGrid}
    height={propsGrid.heightGrid}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 20.4v-5.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM3 20.4v-5.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6ZM14 9.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM3 9.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
      stroke={propsGrid.colorGrid}
      strokeWidth={1.5}
    />
  </svg>
);

const IconUser = (propsUser) => (
  <svg
    width={propsUser.widthUser}
    height={propsUser.heightUser}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8v0Z"
      stroke={propsUser.colorUser}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconWorld = (propsWorld) => (
  <svg
    width={propsWorld.widthWorld}
    height={propsWorld.heightWorld}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Z"
      stroke={propsWorld.colorWorld}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 2.05S16 6 16 12c0 6-3 9.95-3 9.95M11 21.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5h18.74M2.63 8.5h18.74"
      stroke={propsWorld.colorWorld}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSuitcase = (propsSuitcase) => (
  <svg
    width={propsSuitcase.widthSuitcase}
    height={propsSuitcase.heightSuitcase}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 7h8M8 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8Zm0 0V3.6a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6V7H8Z"
      stroke={propsSuitcase.colorSuitcase}
      strokeWidth={1.5}
    />
  </svg>
);

const IconLayout = (propsLayout) => (
  <svg
    width={propsLayout.widthLayout}
    height={propsLayout.heightLayout}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM3 9h18M9 21V9"
      stroke={propsLayout.colorLayout}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBox = (propsBox) => (
  <svg
    width={propsBox.widthBox}
    height={propsBox.heightBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      stroke={propsBox.colorBox}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"
      stroke={propsBox.colorBox}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  IconBox,
  IconChat,
  IconDollar,
  IconGrid,
  IconLayout,
  IconSuitcase,
  IconTrophy,
  IconUser,
  IconWorld,
};
