import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default Button = ({ action, name }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => action()}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    borderColor: "#000000",
    borderWidth: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
  },
});
