import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";

function AvatarUser() {
  return (
    <Avatar className="w-15 h-15">
      <AvatarFallbackText>Jane Doe is test</AvatarFallbackText>
      <AvatarImage source={require("../assets/perfil.jpg")} />
    </Avatar>
  );
}

export default AvatarUser;
