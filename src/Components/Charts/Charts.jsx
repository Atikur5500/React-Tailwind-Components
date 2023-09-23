import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Charts = () => {
    const subjectMarks = [
        { "id": 1, "name": "John Doe", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 40 },
        { "id": 2, "name": "Alice Smith", "mathMarks": 78, "physicsMarks": 88, "chemistryMarks": 62 },
        { "id": 3, "name": "Robert Johnson", "mathMarks": 12, "physicsMarks": 85, "chemistryMarks": 28 },
        { "id": 4, "name": "Emily Wilson", "mathMarks": 88, "physicsMarks": 90, "chemistryMarks": 35 },
        { "id": 5, "name": "Michael Brown", "mathMarks": 45, "physicsMarks": 79, "chemistryMarks": 12 },
        { "id": 6, "name": "Sarah Davis", "mathMarks": 96, "physicsMarks": 92, "chemistryMarks": 20 },
        { "id": 7, "name": "Daniel Lee", "mathMarks": 81, "physicsMarks": 76, "chemistryMarks": 11 },
        { "id": 8, "name": "Olivia Miller", "mathMarks": 40, "physicsMarks": 85, "chemistryMarks": 90 },
        { "id": 9, "name": "William Garcia", "mathMarks": 87, "physicsMarks": 92, "chemistryMarks": 38 },
        { "id": 10, "name": "Sophia Hernandez", "mathMarks": 79, "physicsMarks": 81, "chemistryMarks": 56 }
    ]


    return (
        <div>
            <LineChart className='mx-auto' width={1200} height={400} data={subjectMarks}>
                <Line dataKey="mathMarks" stroke="orange"></Line>
                <Line dataKey="physicsMarks" stroke="red"></Line>
                <Line dataKey="chemistryMarks" stroke="red"></Line>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Charts;