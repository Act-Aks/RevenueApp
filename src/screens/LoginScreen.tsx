import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={["#072d70", "#629ce3", "#133f75"]}
      start={{
        x: 0.2,
        y: 0,
      }}
      end={{
        x: 1,
        y: 1,
      }}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LinearGradient
          colors={["#06a0b8", "#f1c40f", "#06a0b8"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={{
            backgroundColor: "#07d1f0",
            opacity: 0.8,
            borderRadius: 12,
            borderColor: "#07d1f0",
            padding: 16,
            borderWidth: 3,
            width: "70%",
            height: 280,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "30%",
            }}
          >
            <Image
              style={{ width: 50, height: 50, resizeMode: "stretch" }}
              source={require("../../assets/camera.png")}
            />
          </View>
          <View style={{ height: "50%" }}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#0a3a6b",
                height: "40%",
                width: "100%",
                marginBottom: 12,
              }}
            >
              <Image
                source={require("../../assets/user.png")}
                style={{
                  width: "20%",
                  height: "60%",
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
              <TextInput
                style={{
                  width: "80%",
                  color: "white",
                  height: "100%",
                }}
                placeholder={"Username"}
                placeholderTextColor={"white"}
                keyboardType={"email-address"}
                underlineColorAndroid={"transparent"}
                autoCapitalize={"none"}
                value={""}
                onChangeText={(email) => {}}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#0a3a6b",
                height: "40%",
                width: "100%",
              }}
            >
              <Image
                source={require("../../assets/password.png")}
                style={{
                  width: "20%",
                  height: "60%",
                  resizeMode: "contain",
                  alignSelf: "center",
                }}
              />
              <TextInput
                style={{
                  width: "80%",
                  color: "white",
                  height: "100%",
                }}
                placeholder={"Password"}
                placeholderTextColor={"white"}
                keyboardType={"ascii-capable"}
                underlineColorAndroid={"transparent"}
                autoCapitalize={"none"}
                value={""}
                onChangeText={(email) => {}}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: "20%",
              width: "100%",
              backgroundColor: "#0a3a6b",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "700",
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
