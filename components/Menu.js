import React, {useContext} from 'react';
import { AppContext } from '@/context/contex';

import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from '../components/ui/menu';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Icon,
  SettingsIcon,
  HelpCircleIcon,
  MessageCircleIcon,
} from '../components/ui/icon';
import {MenuIcon} from "lucide-react-native"

function MenuOptions() {
  const [selected, setSelected] = React.useState(new Set([]));
    const  { theme } = useContext(AppContext);
    console.log(theme, "theme")
  return (
    <Menu
      placement="bottom left"
      selectionMode="single"
      selectedKeys={selected}
      offset={5}
      className="p-1.5"
      onSelectionChange={(keys) => {
        setSelected(keys);
      }}
      closeOnSelect={true}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps}>
            <MenuIcon/>
          </Button>
        );
      }}
    >
      <MenuItem
        key="Account Settings"
        textValue="Account Settings"
        className="p-2 web:min-w-[294px] min-w-[225px]"
      >
        <Icon as={SettingsIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Agregar Oraciòn</MenuItemLabel>
      </MenuItem>
      
    </Menu>
  );
}


export default MenuOptions;