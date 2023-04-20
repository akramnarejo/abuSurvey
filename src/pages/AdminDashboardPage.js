import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { faker } from "@faker-js/faker";
// @mui
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Box, Button } from "@mui/material";
// components
import Iconify from "../components/iconify";
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummaryAdmin,
  AppCurrentSubject,
  AppConversionRates,
} from "../sections/@dashboard/app";
import SelectSurvey from "src/components/modals/selectSurvey";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
// ----------------------------------------------------------------------

export default function AdminDashboardPage() {
  const { surveys, isAdmin, userInfo, users } = useStore(
    (state) => ({
      surveys: state?.surveys,
      isAdmin: state?.userInfo?.isAdmin,
      userInfo: state?.userInfo,
      users: state?.users,
    }),
    shallow
  );
  const theme = useTheme();
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  const totalUsers = users?.filter(user => user?.role === 'user')?.length
  console.log("--------------userInfo: ", userInfo);
  return (
    <>
      <SelectSurvey isOpen={isModalOpen} handleClose={toggleModal} />
      <Helmet>
        <title> Dashboard | Super Admin </title>
      </Helmet>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <img src={require("../assets/images/Hi.png")} alt="wave" />
            <Typography variant="h4">Hello, Super Admin!</Typography>
          </Box>
          <Button
            variant="contained"
            disableElevation
            sx={{
              width: "300px",
              height: "60px",
              fontSize: "18px",
              fontWeight: "700",
            }}
            onClick={toggleModal}
          >
            Start Survey
          </Button>
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Nepwhan"
              total={
                surveys?.filter((item) => item?.organization === "nepwhan")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              percent={((surveys?.filter(item => item?.organization === "nepwhan")?.filter(item => item?.status === "Preview")?.length/surveys?.length)*100)?.toFixed(2)}
              icon={require("../assets/images/logo.png")}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Acomin"
              total={
                surveys?.filter((item) => item?.organization === "acomin")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              percent={((surveys?.filter(item => item?.organization === "acomin")?.filter(item => item?.status === "Preview")?.length/surveys?.length)*100)?.toFixed(2)}
              icon={require("../assets/images/acomin.png")}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="TB Network"
              total={
                surveys?.filter((item) => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              percent={((surveys?.filter(item => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length/surveys?.length)*100)?.toFixed(2)}
              icon={require("../assets/images/tb.png")}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Total No CBO's"
              total={
                totalUsers ?? 0
              }
              percent={((surveys?.filter(item => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length/surveys?.length)*100)?.toFixed(2)}
              icon={require("../assets/images/tb.png")}
              // responses={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Total No SPO's"
              total={
                surveys?.filter((item) => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              percent={((surveys?.filter(item => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length/surveys?.length)*100)?.toFixed(2)}
              icon={require("../assets/images/tb.png")}
              responses={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Total Super Admin"
              total={
                surveys?.filter((item) => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              percent={((surveys?.filter(item => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length/surveys?.length)*100)?.toFixed(2)}
              icon={require("../assets/images/tb.png")}
              responses={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Total No States"
              total={
                surveys?.filter((item) => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              extraInfo={false}
              responses={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Total No LGA's"
              total={
                surveys?.filter((item) => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              extraInfo={false}
              responses={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppWidgetSummaryAdmin
              title="Total No Districts"
              total={
                surveys?.filter((item) => item?.organization === "tb")?.filter(item => item?.status === "Preview")?.length ??
                0
              }
              extraInfo={false}
              responses={false}
            />
          </Grid>

          {/* <Grid item xs={12} md={8} lg={8}>
            <AppWebsiteVisits
              title="Surveys created"
              subheader="(+43%) than last year"
              chartLabels={[
                "01/01/2003",
                "02/01/2003",
                "03/01/2003",
                "04/01/2003",
                "05/01/2003",
                "06/01/2003",
                "07/01/2003",
                "08/01/2003",
                "09/01/2003",
                "10/01/2003",
                "11/01/2003",
              ]}
              chartData={[
                {
                  name: "Nepwhan",
                  type: "column",
                  fill: "solid",
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: "Acomin",
                  type: "area",
                  fill: "gradient",
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: "TB Network",
                  type: "line",
                  fill: "solid",
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={4} lg={4}>
            <AppCurrentVisits
              title="Templates"
              chartData={[
                { label: "KII at LGA", value: 1344 },
                { label: "KII at Health Facility", value: 5435 },
                { label: "ATM Client Exist", value: 4344 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid> */}

          {/*<Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: "Italy", value: 400 },
                { label: "Japan", value: 430 },
                { label: "China", value: 448 },
                { label: "Canada", value: 470 },
                { label: "France", value: 540 },
                { label: "Germany", value: 580 },
                { label: "South Korea", value: 690 },
                { label: "Netherlands", value: 1100 },
                { label: "United States", value: 1200 },
                { label: "United Kingdom", value: 1380 },
              ]}
            />
          </Grid>
          { 
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={[
                "English",
                "History",
                "Physics",
                "Geography",
                "Chinese",
                "Math",
              ]}
              chartData={[
                { name: "Series 1", data: [80, 50, 30, 40, 100, 20] },
                { name: "Series 2", data: [20, 30, 40, 80, 20, 80] },
                { name: "Series 3", data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(
                () => theme.palette.text.secondary
              )}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  "1983, orders, $4220",
                  "12 Invoices have been paid",
                  "Order #37745 from September",
                  "New order placed #XF-2356",
                  "New order placed #XF-2346",
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: "FaceBook",
                  value: 323234,
                  icon: (
                    <Iconify
                      icon={"eva:facebook-fill"}
                      color="#1877F2"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Google",
                  value: 341212,
                  icon: (
                    <Iconify
                      icon={"eva:google-fill"}
                      color="#DF3E30"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Linkedin",
                  value: 411213,
                  icon: (
                    <Iconify
                      icon={"eva:linkedin-fill"}
                      color="#006097"
                      width={32}
                    />
                  ),
                },
                {
                  name: "Twitter",
                  value: 443232,
                  icon: (
                    <Iconify
                      icon={"eva:twitter-fill"}
                      color="#1C9CEA"
                      width={32}
                    />
                  ),
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: "1", label: "Create FireStone Logo" },
                { id: "2", label: "Add SCSS and JS files if required" },
                { id: "3", label: "Stakeholder Meeting" },
                { id: "4", label: "Scoping & Estimations" },
                { id: "5", label: "Sprint Showcase" },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
