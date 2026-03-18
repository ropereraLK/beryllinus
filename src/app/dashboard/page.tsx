"use client";

import AppLayout from "@/app/component/layout/AppLayout";
import { Box, Card, CardContent, Typography } from "@mui/material";


const DashboardPage = ()=>{
    return(<AppLayout>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >

        {[1, 2, 3, 4].map((item) => (
          <Box key={item}>
            <Card>
              <CardContent>
                <Typography variant="h6">Bookings</Typography>
                <Typography variant="h4">281</Typography>
                <Typography color="green">+55%</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}

      </Box>
    </AppLayout>);
}

export default DashboardPage;