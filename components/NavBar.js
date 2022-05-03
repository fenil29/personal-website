import React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, Moon } from "tabler-icons-react";

function NavBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      //   variant="outline"
      variant="default"
      color={dark ? "" : "blue"}
      //   color="red"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Sun size={25} /> : <Moon size={25} />}
    </ActionIcon>
  );
}
export default NavBar;
