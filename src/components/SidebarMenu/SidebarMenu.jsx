import React from "react";
import { Button, SubMenu } from "../Bottons/Bottons";
import menuItems from "./MenuItems";
import { StyleMenu } from "./Style";

export default function SidebarMenu() {
  return (
    <>
      <StyleMenu>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Button>
                <h4>{menuItem.title}</h4>
              </Button>

              {menuItem.subMenu && (
                <ul>
                  {menuItem.subMenu.map((subMenuItem, subIndex) => (
                    <li key={subIndex}>
                      <SubMenu>{subMenuItem.title}</SubMenu>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </StyleMenu>
    </>
  );
}
