import React, { useState } from 'react';
import './Spin.css';
import Navbar from './Nav';

function Spin() {
    const teams = [
        "FC Thalayillath", "Thuruthi Riders", "Al Shabab Karuvacheri",
        "Universal Padne", "Shooters Padne", "Shadow Wings AFC Live Beericheri",
        "West Eleri FC", "Green Guys FC Cheemeni", "Magic Line HOP Padne", 
        "Mettammal Brothers", "Super Soccer Beecharakadavu", 
        "Bab Al Noor Furniture Star of Padne", "Imperial Bangalore Hitters Edachakai",
        "Jamaica FC Padne", "Al Wafaa UAE Green Star Kadangod", "Soccer FC Dubai",
        "FC Neelambam", "Manjus FC Town Trikaripur", "VASC Vadakkumbad",
        "Munavir City", "CASC Padne", "FC Nileshwar", 
        "Green Star Ottapadavu", "KK Brothers Mamzar"
    ];

    const [groups, setGroups] = useState([]);
    const [spinning, setSpinning] = useState(false);
    const [spinCount, setSpinCount] = useState(0);
    const [showMatches, setShowMatches] = useState(false);
    const [showFixture, setShowFixture] = useState(false);

    const handleSpin = () => {
        setSpinning(true);
        setTimeout(() => {
            const shuffledTeams = [...teams];
            const remainingTeams = shuffledTeams.filter(team => !groups.flat().includes(team));
            const randomTeams = remainingTeams.sort(() => Math.random() - 0.5).slice(0, 3);

            setGroups(prevGroups => [...prevGroups, randomTeams]);
            setSpinCount(prevCount => prevCount + 1);
            setSpinning(false);
        }, 2000);
    };

    const toggleShowMatches = () => {
        setShowMatches(!showMatches);
    };

    const toggleShowFixture = () => {
        setShowFixture(!showFixture);
    };

    const generateMatches = (group) => {
        const [team1, team2, team3] = group;
        return [
            { teamA: team1, teamB: team2 },
            { teamA: team2, teamB: team3 },
            { teamA: team1, teamB: team3 }
        ];
    };

    const matchTimes = [
        "4:00 PM", "4:00 PM", "4:20 PM", "4:20 PM", "4:40 PM", "4:40 PM",
        "5:00 PM", "5:00 PM", "5:20 PM", "5:20 PM", "5:40 PM", "5:40 PM",
        "6:00 PM", "6:00 PM", "6:20 PM", "6:20 PM", "6:40 PM", "6:40 PM",
        "7:00 PM", "7:00 PM", "7:20 PM", "7:20 PM", "7:40 PM", "7:40 PM"
    ];

    const generateFixtureComponent = (groups) => {
        const groupLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let pool1MatchIndex = 1;
        let pool2MatchIndex = 2;
    
        return (
            <>
                {["Pool 1", "Pool 2"].map((pool, poolIndex) => (
                    <div key={pool} className="fixture-box">
                        <h2>{pool} Matches</h2>
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Match #</th>
                                    <th>Time</th>
                                    <th>Group</th>
                                    <th>Teams</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3].flatMap((round) =>
                                    groups.slice(poolIndex * 4, (poolIndex + 1) * 4).map((group, groupIndex) => {
                                        const match = generateMatches(group)[round - 1];
                                        const matchNumber = poolIndex === 0 ? pool1MatchIndex : pool2MatchIndex;
                                        const matchTime = matchTimes[matchNumber - 1];
                                        const groupLabel = groupLabels[poolIndex * 4 + groupIndex];
    
                                        if (poolIndex === 0) {
                                            pool1MatchIndex += 2;
                                        } else {
                                            pool2MatchIndex += 2;
                                        }
    
                                        return (
                                            <tr key={`${pool}-group-${groupLabel}-match-${round}`}>
                                                <td>{matchNumber}</td>
                                                <td>{matchTime}</td>
                                                <td>Group {groupLabel}</td>
                                                <td>{match.teamA} vs {match.teamB}</td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                ))}
            </>
        );
    };
    
    const exportFixtureToCSV = () => {
        const csvRows = [];
        csvRows.push("Match #,Time,Group,Teams");

        const groupLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let pool1MatchIndex = 1;
        let pool2MatchIndex = 2;

        [0, 1].forEach(poolIndex => {
            const groupsInPool = groups.slice(poolIndex * 4, (poolIndex + 1) * 4);
            groupsInPool.forEach((group, groupIndex) => {
                const matches = generateMatches(group);
                const groupLabel = groupLabels[poolIndex * 4 + groupIndex];
                matches.forEach((match, round) => {
                    const matchNumber = poolIndex === 0 ? pool1MatchIndex : pool2MatchIndex;
                    const matchTime = matchTimes[matchNumber - 1];
                    csvRows.push(`${matchNumber},${matchTime},Group ${groupLabel},${match.teamA} vs ${match.teamB}`);
                    
                    if (poolIndex === 0) {
                        pool1MatchIndex += 2;
                    } else {
                        pool2MatchIndex += 2;
                    }
                });
            });
        });

        const csvData = new Blob([csvRows.join("\n")], { type: 'text/csv' });
        const csvUrl = window.URL.createObjectURL(csvData);
        const downloadLink = document.createElement('a');
        downloadLink.href = csvUrl;
        downloadLink.download = "fixture.csv";
        downloadLink.click();
    };

    return (
        <div className="container-fluid">
                        <Navbar/>

        <div className="spin-container">
            <div className={`spin-wheel ${spinning ? 'spinning' : ''}`}>
                {teams.map((team, index) => (
                    <div
                        key={index}
                        className="wheel-segment"
                        style={{ transform: `rotate(${index * 15}deg)` }}
                    >
                        <div className="segment-content">{team}</div>
                    </div>
                ))}
                <button onClick={handleSpin} disabled={spinning || spinCount >= 8} className="spin-button">
                    {spinning ? 'Spinning...' : spinCount < 8 ? 'Spin' : 'Finish'}
                </button>
            </div>

            <div className="pools-container">
                <div className="pool-row">
                    <div className="pool-box">
                        <h2>Pool-1</h2>
                        <div className="groups">
                            {groups.slice(0, 4).map((group, index) => (
                                <div key={index} className="group-container">
                                    <h3>Group {['A', 'B', 'C', 'D'][index]}</h3>
                                    <ul>
                                        {group.map((team, i) => (
                                            <li key={i}>{team}</li>
                                        ))}
                                    </ul>
                                    {showMatches && (
                                        <div className="match-box">
                                            {generateMatches(group).map((match, i) => (
                                                <div key={i} className="match-item-box">
                                                    Match {i + 1}: {match.teamA} vs {match.teamB}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pool-row">
                    <div className="pool-box">
                        <h2>Pool-2</h2>
                        <div className="groups">
                            {groups.slice(4, 8).map((group, index) => (
                                <div key={index} className="group-container">
                                    <h3>Group {['E', 'F', 'G', 'H'][index]}</h3>
                                    <ul>
                                        {group.map((team, i) => (
                                            <li key={i}>{team}</li>
                                        ))}
                                    </ul>
                                    {showMatches && (
                                        <div className="match-box">
                                            {generateMatches(group).map((match, i) => (
                                                <div key={i} className="match-item-box">
                                                    Match {i + 1}: {match.teamA} vs {match.teamB}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="text-center">
            {spinCount === 8 && !spinning && (
                <button onClick={toggleShowMatches} className="show-matches-button mx-3 my-3">
                    {showMatches ? 'Hide Matches' : 'Show Matches'}
                </button>
            )}

            {spinCount === 8 && (
                <button onClick={toggleShowFixture} className="show-fixture-button mx-3 my-3">
                    {showFixture ? 'Hide Fixture' : 'Show Fixture'}
                </button>
            )}
            {showFixture && (
                    <div className=" text-center">
                        <button onClick={exportFixtureToCSV} className="show-fixture-button mx-3 my-3">
                            Download Fixture
                        </button>
                    </div>
                )}
            </div>
           

            {showFixture && (
                <div className="fixture-container">
                    {generateFixtureComponent(groups)}
                </div>
            )}
        </div>
    );
}

export default Spin;
