export const sidebarLinks = [
  {
    imgURL: "/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/heart.svg",
    route: "/notifications",
    label: "Notifications",
  },
  {
    imgURL: "/create.svg",
    route: "/create-post",
    label: "Post",
  },
  {
    imgURL: "/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/user.svg",
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "posts", label: "Posts", icon: "/reply.svg" },
  { value: "replies", label: "Replies", icon: "/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
