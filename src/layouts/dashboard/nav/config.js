// component
import SvgColor from "../../../components/svg-color";
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "Dashboard",
    path: "/",
    icon: icon("ic_analytics"),
  },
  {
    title: "Survey",
    path: "/survey",
    icon: icon("ic_user"),
  },

  {
    title: "File Upload",
    path: "/file-upload",
    icon: icon("ic_user"),
  },

  {
    title: "User Permissions",
    path: "/user-permissions",
    icon: icon("ic_cart"),
  },
  {
    title: "Submission",
    path: "/submission",
    icon: icon("ic_cart"),
  },

  {
    title: "File Manager",
    path: "/admin-filemanager",
    icon: icon("ic_cart"),
  },
  // {
  //   title: "Report",
  //   path: "/blog",
  //   icon: icon("ic_blog"),
  // },
  // {
  //   title: "Notification",
  //   path: "/notification",
  //   icon: icon("ic_lock"),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
