import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from 'react-chartjs-2';

export default function Dashboard() {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch('/api/payments')
            .then(res => res.json())
            .then(data => setPayments(data));
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Nombre de paiements</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className="text-3xl font-bold">{payments.length}</h3>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Graphique des paiements</CardTitle>
                </CardHeader>
                <CardContent>
                    <Bar data={{
                        labels: payments.map(p => `ID: ${p.id}`),
                        datasets: [{ label: 'Montant (€)', data: payments.map(p => p.amount) }]
                    }} />
                </CardContent>
            </Card>
        </div>
    );
}