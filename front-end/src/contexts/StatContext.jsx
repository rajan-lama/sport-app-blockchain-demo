import { createContext, useContext, useState, useEffect } from 'react'

const StatContext = createContext()

export const useStats = () => {
    const context = useContext(StatContext)

    if (!context) {
        throw new Error('useStats must be used within a StatProvider')
    }
    return context
}

export const StatProvider = ({ children }) => {

    const [stats, setStats] = useState({
    totalBets: 0,
    wins: 0,
    losses: 0,
    totalWagered: 0,
    totalWon: 0,
    winRate: 0,
    roi: 0
    })

    const updateStats = (newStats) => {
    setStats((prevStats) => {
        const merged = {
            ...prevStats,
            ...newStats
        }
        console.debug('StatContext.updateStats called', { prevStats, newStats, merged })
        return merged
    })
    }

    return (
        <StatContext.Provider value={{ stats, updateStats, setStats }}>
            {children}
        </StatContext.Provider>
    )
}