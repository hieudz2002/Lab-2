import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utility/colors";
import { fetchRandomContact } from "../utility/api";
import ContactThumbnail from "../components/ContactThumbnail";
import DetailListItem from "../components/DetailListItem";

export default function ProfileScreen() {
  const [contact, setContact] = React.useState({});
  React.useEffect(() => {
    fetchRandomContact().then((contact) => setContact(contact));
  }, []);

  const { avatar, name, email, phone, cell } = contact;
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} email={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem 
            icon="mail"
            title={"Gmail Work"}
            subtitle={email}
        />
        <DetailListItem 
            icon="phone"
            title={"Phone Number Work"}
            subtitle={phone}
        />
        <DetailListItem 
            icon="smartphone"
            title={"Your Number Phone"}
            subtitle={cell}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});
