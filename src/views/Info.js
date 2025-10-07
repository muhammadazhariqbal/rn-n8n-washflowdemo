import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
} from "react-native";
import { handleDemoInfo } from "../viewmodels/DemoInfo";
import Button from "../components/Button";
import Loader from "../components/Loader";

const Info = ({ navigation }) => {
  const [data, setData] = useState(null);
  const openURL = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Can't open this URL");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const resultDev = await handleDemoInfo({ value: "dev" });
      const resultRep = await handleDemoInfo({ value: "rep" });
      setData({ resultDev, resultRep });
    };
    loadData();
  }, []);

  if (data === null) {
    return <Loader />;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>WashFlow Demo</Text>
      <Text style={styles.description}>
        This feature demo showcases an n8n AI workflow integrated with React
        Native. Employees can capture and submit car wash receipts for claim
        processing. This is a rebuild of a client feature, shared here with
        dummy data for portfolio use.
      </Text>

      <Text style={styles.sectionTitle}>Developer</Text>
      <Text style={styles.text}>{data.resultDev.dev.name}</Text>

      <TouchableOpacity onPress={() => openURL(data.resultDev.dev.github)}>
        <Text style={styles.link}>GitHub Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => openURL(data.resultRep.rep.n8nGithubURL)}
      >
        <Text style={styles.link}>n8n Workflow Repo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => openURL(data.resultRep.rep.rnN8NGithubURL)}
      >
        <Text style={styles.link}>Project Repo</Text>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
        Before Testing
      </Text>
      <TouchableOpacity
        onPress={() => openURL(data.resultRep.rep.setupGuideURL)}
      >
        <Text style={styles.link}>Follow Setup Instructions</Text>
      </TouchableOpacity>

      <Button action={() => navigation.navigate("Demo")} name={"Test Demo"} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 10,
    marginTop: 50,
  },
  description: {
    fontSize: 15,
    color: "#222222",
    lineHeight: 22,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
    color: "#333333",
    marginBottom: 6,
  },
  link: {
    fontSize: 15,
    color: "#000000",
    textDecorationLine: "underline",
    marginBottom: 4,
  },
});

export default Info;
