"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis, Pie, PieChart, Cell } from "recharts"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Misconfigurations",
    color: "hsl(var(--primary))",
  },
}

const pieData = [
    { name: 'Critical', value: 4, color: 'hsl(var(--destructive))' },
    { name: 'High', value: 8, color: 'hsl(var(--primary))' },
    { name: 'Medium', value: 15, color: 'hsl(var(--chart-4))' },
    { name: 'Low', value: 22, color: 'hsl(var(--chart-2))' },
]


export default function DashboardCharts() {
  return (
    <div>
        <h2 className="font-headline text-2xl font-bold mb-4">Visualizations</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
            <CardHeader>
            <CardTitle className="font-headline">Audit Score</CardTitle>
            <CardDescription>Overall security score based on recent audits.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <div className="relative h-48 w-48">
                    <svg className="h-full w-full" viewBox="0 0 36 36">
                        <path
                            className="text-muted/20"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            className="text-primary"
                            strokeDasharray="75, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            transform="rotate(90 18 18)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold font-headline text-foreground">75</span>
                        <span className="text-sm text-muted-foreground">/ 100</span>
                    </div>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
            <CardTitle className="font-headline">Misconfigurations Over Time</CardTitle>
            <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
            <ChartContainer config={chartConfig} className="h-48 w-full">
                <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
            </ChartContainer>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Vulnerability Severity</CardTitle>
                <CardDescription>Breakdown of identified vulnerabilities.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}} className="h-48 w-full">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={70} startAngle={90} endAngle={450}>
                             {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
        </div>
    </div>
  )
}
