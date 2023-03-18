import { css } from "@emotion/react";
import { colors } from "../../colors";

export const navContainerStyle = css({
  //mobile first
  background: colors.darkGray,
  marginTop: "-16px",
  display: "flex",
  alignItems: "center",
  ul: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    listStyle: "none",
    transition: "all .3s ease-in",

    li: {
      fontSize: "18px",
    },
  },
});

export const mobileMenuStyle = css({
  position: "absolute",
  background: colors.darkGray,
  top: "43px",
  paddingTop: "20px",
  width: "200px",
});

export const mobileMenuVisibleStyle = css({
  transform: "translateX(0px)",
  height: "100vh",

  "li:hover": {
    color: colors.white,
    cursor: "pointer",
  },
});

export const mobileMenuHiddenStyle = css({
  transform: "translateX(-1000px)",
  height: "0",
});

export const menuBarStyle = css({
  width: "60px",
  marginTop: "15px",
  cursor: "pointer",

  "&:hover": {
    color: colors.white,
  },
});
