import React from "react"

const { determineRegion, determineCity, determinePayout } = require('../rolling');

class App extends React.Component {
    state = {
      gameStarted: false,
      gameHash: '',
      players: [],
      playerData: {},
      askForRegion: false,
      requestedRegion: '',
      latestRollResults: {}
    };

    initNewPlayer = (playerName) => {
      const homeRegion = determineRegion()
      const homeCity = determineCity(homeRegion);

      let firstRegion = determineRegion();
      while (firstRegion === homeRegion) firstRegion = determineRegion();
      const firstDestination = determineCity(firstRegion);
      const firstPayout = determinePayout(homeCity, firstDestination);

      const existingPlayerData = this.state.playerData;
      const playerInformation = {
        playerName,
        homeCity,
        homeRegion,
        currentCity: homeCity,
        payout: firstPayout,
        destination: firstDestination
      };

      const infoToSet = {...existingPlayerData};
      infoToSet[playerName] = playerInformation

      this.setState({
        playerData: infoToSet
      })
    }

    rollForNewDestination = (player) => {
      const { currentCity, currentRegion, playerName } = player;
      let region = determineRegion();

      if (region === currentRegion) {
        this.setState({askForRegion: true, requestedRegion: ''})
        return
      }

      const destination = determineCity(region);
      const payout = determinePayout(currentCity, destination);
      return {
        playerName, region, currentCity, destination, payout
      }
      // this.setState({
      //   latestRollResults: {
      //     playerName,
      //     region,
      //     currentCity,
      //     destination,
      //     payout
      //   }
      // })
    };

    testInit = () => {
      this.initNewPlayer('marty')
    }

    render() {
        return (
            <div>
              <p>on the page. congrats</p>
              <button onClick={this.testInit}>click me</button>
            </div>
        )
    }
}

export default App