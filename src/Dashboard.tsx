import React from 'react'
import { Paper, Typography } from '@mui/material'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

type GridItemProps = {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ children, ...props }, ref) => (
    <Paper
      ref={ref}
      sx={{
        display: 'grid',
        placeItems: 'center',
        '&:hover': { cursor: 'grab' },
        '&:active': { cursor: 'grabbing' },
      }}
      {...props}
    >
      <Typography>{children}</Typography>
    </Paper>
  ),
)

function Dashboard(): JSX.Element {
  const layout = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 1, h: 2 },
      { i: 'b', x: 1, y: 0, w: 3, h: 2 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ],
  }
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layout}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      width={1200}
    >
      <GridItem key="a">a</GridItem>
      <GridItem key="b">b</GridItem>
      <GridItem key="c">c</GridItem>
    </ResponsiveGridLayout>
  )
}

export { Dashboard }
