import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@/components/ui/menu";
import { Button, ButtonIcon } from "../components/ui/button";
import { MenuIcon } from "../components/ui/icon";
import { ListFilter } from "lucide-react-native";

function FilterMenu({ handleFilterPerAnswered, handleFilterAllAnswered,handleFilterNoAnswered }) {
  return (
    <Menu
      offset={5}
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps} size="sm">
            <ListFilter/>
          </Button>
        );
      }}
    >
      <MenuItem
        key="Membership"
        textValue="Membership"
        className="p-2 justify-between"
      >
        <MenuItemLabel size="sm">Filtrar por :</MenuItemLabel>
      </MenuItem>
        <MenuItem key="all" textValue="Address Book" className="p-2" onPressIn={handleFilterAllAnswered} >
          <MenuItemLabel size="sm">Todas</MenuItemLabel>
        </MenuItem>
      <MenuItem key="answered" textValue="Address Book" className="p-2" onPressIn={handleFilterPerAnswered} >
        <MenuItemLabel size="sm">Respondidas</MenuItemLabel>
      </MenuItem>
      <MenuItem key="noAnswered" textValue="Orders" className="p-2" onPressIn={handleFilterNoAnswered}>
        <MenuItemLabel size="sm">No respondidas</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem key="date" textValue="Earn & Redeem" className="p-2">
        <MenuItemLabel size="sm">Fecha</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}

export default FilterMenu;
