import React from 'react';
import './Spin.css';

function TournamentMatches() {
    // Pre-defined matches for the tournament
    const predefinedMatches = [
        { matchNumber: 25, time: "8:00 PM", teamA: "A1", teamB: "B2" },
        { matchNumber: 26, time: "8:00 PM", teamA: "E1", teamB: "F2" },
        { matchNumber: 27, time: "8:20 PM", teamA: "B1", teamB: "A2" },
        { matchNumber: 28, time: "8:20 PM", teamA: "F1", teamB: "E2" },
        { matchNumber: 29, time: "8:40 PM", teamA: "C1", teamB: "D2" },
        { matchNumber: 30, time: "8:40 PM", teamA: "G1", teamB: "H2" },
        { matchNumber: 31, time: "9:00 PM", teamA: "D1", teamB: "C2" },
        { matchNumber: 32, time: "9:00 PM", teamA: "H1", teamB: "G2" }
    ];

    // Quarter Matches
    const quarterMatches = [
        { matchNumber: 33, time: "9:20 PM", matchDetails: "Winner - Match # 25 vs Match # 29" },
        { matchNumber: 34, time: "9:20 PM", matchDetails: "Winner - Match # 27 vs Match # 31" },
        { matchNumber: 35, time: "9:40 PM", matchDetails: "Winner - Match # 26 vs Match # 30" },
        { matchNumber: 36, time: "9:40 PM",  matchDetails: "Winner - Match # 28 vs Match # 32" }

    ];

    // Semi Finals
    const semiFinals = [
        { matchNumber: 37, time: "10:00 PM", matchDetails: "Winner - Match # 33 vs Match # 34" },
        { matchNumber: 38, time: "10:00 PM", matchDetails: "Winner - Match # 35 vs Match # 36" }
    ];

    // Final
    const finalMatch = [
        { matchNumber: 39, time: "10:20 PM", matchDetails: "Winner - Match # 37 vs Match # 38" }
    ];

    return (
        <div className="container-fluid">
        <div className="container  text-center pt-2">
            <h2 className='mt-5'>Pre-Quarter Matches</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Match #</th>
                        <th>Time</th>
                        <th>Teams</th>
                    </tr>
                </thead>
                <tbody>
                    {predefinedMatches.map((match, index) => (
                        <tr key={index}>
                            <td>{match.matchNumber}</td>
                            <td>{match.time}</td>
                            <td>{match.teamA} vs {match.teamB}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2  className='mt-5'>Quarter Matches</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Match #</th>
                        <th>Time</th>
                        <th>Teams</th>
                    </tr>
                </thead>
                <tbody>
                    {quarterMatches.map((match, index) => (
                        <tr key={index}>
                            <td>{match.matchNumber}</td>
                            <td>{match.time}</td>
                            <td>{match.matchDetails}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2  className='mt-5'>Semi Finals</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Match #</th>
                        <th>Time</th>
                        <th>Teams</th>
                    </tr>
                </thead>
                <tbody>
                    {semiFinals.map((match, index) => (
                        <tr key={index}>
                            <td>{match.matchNumber}</td>
                            <td>{match.time}</td>
                            <td>{match.matchDetails}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2  className='mt-5'>Final</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Match #</th>
                        <th>Time</th>
                        <th>Teams</th>
                    </tr>
                </thead>
                <tbody>
                    {finalMatch.map((match, index) => (
                        <tr key={index}>
                            <td>{match.matchNumber}</td>
                            <td>{match.time}</td>
                            <td>{match.matchDetails}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{padding:'3rem'}}></div>
        </div>
        </div>
    );
}

export default TournamentMatches;
