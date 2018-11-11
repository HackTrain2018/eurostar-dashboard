export const menus = [
  {
    name: "Dashboard",
    icon: "dashboard",
    link: false,
    open: false,
    chip: { value: 1, color: "accent" },
    sub: [
      {
        name: "Real-time data",
        link: "/auth/dashboard-realtime",
        icon: "dashboard",
        chip: "2",
        open: true
      },
      {
        name: "Historical data",
        link: "/auth/dashboard-historical",
        icon: "dashboard",
        chip: "2",
        open: true
      }
    ]
  },
  {
    name: "Train map",
    icon: "map",
    open: false,
    link: false,
    sub: [
      {
        name: "France",
        icon: "directions",
        link: "/auth/maps/googlemap",
        open: false
      },
      {
        name: "Belgium",
        icon: "directions",
        link: "/auth/maps/googlemap",
        open: false
      },
      {
        name: "United Kingdom",
        icon: "directions",
        link: "/auth/maps/googlemap",
        open: false
      },
      {
        name: "The Netherlands",
        icon: "directions",
        link: "/auth/maps/googlemap",
        open: false
      }
    ]
  }
];
