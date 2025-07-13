import React from 'react'
import Container from '../../components/Container'

function TodoStats({ stats }) {
  return (
   <Container>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* total tasks */}
        <div className="card bg-gradient-to-br from-purple-900/10 to-purple-400/5 border border-pink-300/20 shadow-lg">
            <div className="card-body p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-base-content/70 font-medium">Total Tasks</span>
                </div>
                <div className="text-3xl font-bold text-pink-200">
                    {stats.total}
                </div>
            </div>
        </div>

        {/* active tasks */}
        <div className="card bg-gradient-to-br from-purple-900/10 to-purple-400/5 border border-pink-300/20 shadow-lg">
            <div className="card-body p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-base-content/70 font-medium">Active Tasks</span>
                </div>
                <div className="text-3xl font-bold text-green-400">
                    {stats.active}
                </div>
            </div>
        </div>

        {/* completed tasks */}
        <div className="card bg-gradient-to-br from-purple-900/10 to-purple-400/5 border border-pink-300/20 shadow-lg">
            <div className="card-body p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-base-content/70 font-medium">Completed Tasks</span>
                </div>
                <div className="text-3xl font-bold text-red-400">
                    {stats.completed}
                </div>
            </div>
        </div>
    </div>

   </Container>
  )
}

export default TodoStats