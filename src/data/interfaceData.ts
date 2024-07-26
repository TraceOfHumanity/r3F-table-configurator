type InterfaceData = {
  label: string;
  type: number;
  color: string;
};

export const legsTypeInterfaceData: Pick<InterfaceData, "label" | "type">[] = [
  {
    label: "Standard",
    type: 0,
  },
  {
    label: "Solid",
    type: 1,
  },
  {
    label: "Design",
    type: 2,
  },
];

export const legsColorInterfaceData: Pick<InterfaceData, "label" | "color">[] =
  [
    {
      label: "Black",
      color: "#777777",
    },
    {
      label: "Chrome",
      color: "#ECECEC",
    },
    {
      label: "Gold",
      color: "#C9BD71",
    },
    {
      label: "Pink Gold",
      color: "#C9A3B9",
    },
  ];
