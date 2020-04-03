import React, { useState, useEffect } from "react";

//**TouchableOpacity tonar qualquer coisa clicavel e diminui a opacidade */
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

//**Navegação entre páginas */
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

//**importa o logo2x e logo3x automaticamente conforme a tela*/
import logoImg from "../../assets/logo.png";

import styles from "./styles";

import api from "../../services/api";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Details", { incident });
  }

  async function loadIncidents() {
    const response = await api.get("incidents");
    setIncidents(response.data);
    setTotal(response.headers["x-total-count"]);
    console.log("header-x: " + JSON.stringify(response.headers));
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.containter}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={inicident => String(inicident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
