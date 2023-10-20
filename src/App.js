import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    async play() {
        const randomNumber = MissionUtils.Random.pickNumberInRange(1,9);

        console.log("HELLO")
    }
}

export default App;
