import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Case } from "./components/Case/Case";
import { useState, useEffect, useRef } from "react";
import { Resultat } from "./components/Resultat/Resultat";
import { GameReset } from "./components/GameReset/GameReset";
import { Audio } from "expo-av";
import endSound from "./constants/game_over.wav";
export default function App() {
  const [carrer, setCarrer] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [sound, setSound] = useState();
  const [sound1, setSound1] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./constants/click.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);




  async function playSound1() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./constants/game_over.wav")
    );
    setSound1(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound1
      ? () => {
          console.log("Unloading Sound");
          sound1.unloadAsync();
        }
      : undefined;
  }, [sound1]);






  function changerValeur(index) {
    if (carrer[index] || calculateWinner(carrer)) {
      return;
    }
    const newCarrer = [...carrer];
    if (xIsNext) {
      newCarrer[index] = "X";
      setXIsNext(false);
    } else {
      newCarrer[index] = "0";
      setXIsNext(true);
    }

    setCarrer(newCarrer);
    playSound();
  }
  function reset() {
    playSound1();
    setCarrer(Array(9).fill(null));
    setXIsNext(true);
  }
  function calculateWinner(carrer) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (carrer[a] && carrer[a] === carrer[b] && carrer[a] === carrer[c]) {
        return carrer[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(carrer);
  let status;
  if (winner) {
    status = "Vainqueur est : " + winner;
  } else {
    status = "Joueur suivant : " + (xIsNext ? "X" : "O");
  }
  console.log(status);
  const isGameOver = winner || carrer.every((cell) => cell !== null);

  return (
    <>
      <View style={s.container}>
        <View>
          <Text style={s.subtitle}>Made by Salathia (づ｡◕‿‿◕｡)づ💻</Text>
          <Text style={s.titre}>tic tac toe</Text>
        </View>
        <View style={s.tableau}>
          <Case value={carrer[0]} onPress={() => changerValeur(0)} />
          <Case value={carrer[1]} onPress={() => changerValeur(1)} />
          <Case value={carrer[2]} onPress={() => changerValeur(2)} />
          <Case value={carrer[3]} onPress={() => changerValeur(3)} />
          <Case value={carrer[4]} onPress={() => changerValeur(4)} />
          <Case value={carrer[5]} onPress={() => changerValeur(5)} />
          <Case value={carrer[6]} onPress={() => changerValeur(6)} />
          <Case value={carrer[7]} onPress={() => changerValeur(7)} />
          <Case value={carrer[8]} onPress={() => changerValeur(8)} />
        </View>

        <Resultat status={status} />

        {isGameOver && (
          
          <View>
            <GameReset onPress={reset} />
          </View>
        )
        }
      </View>
    </>
  );
}
