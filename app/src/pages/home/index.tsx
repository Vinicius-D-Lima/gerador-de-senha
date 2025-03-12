import {useState} from "react"
import { Text, View , StyleSheet,Image, TouchableOpacity, Modal} from "react-native";
import Slider from "@react-native-community/slider";
import {ModalPassword} from '../../components/modal/index'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function Home() {
  const [size, setSize] = useState(10)
  const [passwordValue,setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  function generatePassword(){
    let password = "";
    const n = charset.length;
    for(let i = 0; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password);
    setModalVisible(true);
  }
  return (
    
    <View style={styles.container}>
        
      <Image source={require("../../assets/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.title}> {size} caracteres</Text>
      <View style={styles.area}>
        <Slider 
        style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor="#ff0000"
        minimumTrackTintColor="#000"
        thumbTintColor="#4e2485"
        value={size}
        onValueChange={(value) => setSize(Number(value.toFixed(0)))}>

        </Slider>

      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose = {() => setModalVisible(false)} />
      </Modal>
    </View>
    
    
    
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button:{
    backgroundColor: "#392de9",
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 8,
    marginTop: 18,
    marginBottom: 18,
  },
  buttonText:{
    color:"#FFF",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  }
})