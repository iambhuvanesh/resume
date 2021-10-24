import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import tw from 'tailwind-styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background:rgb(196 196 196 / 10%);
  }`
const PageContainer = tw(styled.div``)`container mx-auto max-w-screen-lg px-4`
const primaryColor = '#5057EA';
export const clock = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="15" cy="15" r="14" fill="white" />
  <path d="M14.9999 0C6.72895 0 0 6.72895 0 14.9999C0 23.2709 6.72882 30 14.9997 30C23.2708 30 29.9996 23.2709 29.9996 14.9999C29.9997 6.72895 23.2709 0 14.9999 0ZM14.9999 27.9466C7.86119 27.9466 2.05352 22.1387 2.05352 14.9999C2.05339 7.86119 7.86119 2.05339 14.9999 2.05339C22.1385 2.05339 27.9463 7.86119 27.9463 14.9999C27.9463 22.1388 22.1385 27.9466 14.9999 27.9466Z" fill="#5057EA" />
  <path d="M22.7393 14.7994H15.6139V7.01546C15.6139 6.44845 15.1544 5.98877 14.5872 5.98877C14.0202 5.98877 13.5605 6.44845 13.5605 7.01546V15.8261C13.5605 16.3932 14.0202 16.8528 14.5872 16.8528H22.7393C23.3065 16.8528 23.766 16.3932 23.766 15.8261C23.766 15.2591 23.3063 14.7994 22.7393 14.7994Z" fill="#5057EA" />
</svg>
const Body = tw(styled.div`

min-height:100vh;
font-family:Montserrat;
`)`relative`;
const HeroContainer = tw.div`h-32 bg-brand flex justify-center relative shadow-lg rounded-t-none`;
const MainTitle = tw.div`text-5xl text-center text-white font-bold w-full mt-4`;
const Profile = tw(styled.div`bottom:-20%;img{
  border-radius:50%;
  margin-top:-70px;
  height:150px;width:150px
}`)`relative flex justify-center hidden`
const Section = tw.div`mt-10 bg-white rounded-2xl`;
const Description = tw(Section)`p-4 text-lg`;
const Flex = tw.div`flex`;
const LeftItem = tw(styled(Section)`ul{
  li{
    position:relative;
    display:flex;
    margin:6px 0;
    p{
      margin-left:20px;
    }
&:before{
  content:'';
  position:absolute;
  top:10px;
 height:10px;width:10px;background-color:${primaryColor};border-radius:50%;
}
  }}`)`flex p-4 text-lg flex-2 mr-5 bg-white`
const RightItem = tw(Section)`flex flex-1 ml-5 bg-white`;
const Skills = tw.div`grid grid-cols-2 gap-x-2 justify-between w-full p-4`;
const Skill = tw.div`p-2 border-brand border-1 p-2 rounded-2xl border my-2 text-center flex items-center justify-center text-sm`
const skills = ['HTML', 'CSS', 'Javascript', 'React', 'Ember', 'AngularJS', 'Redux', 'Webpack', 'NextJS', 'Typescript', 'NodeJS', 'SEO']
const TimelineContainer = tw.div`mt-10`;
const Timeline = tw.div``;
const Footer = tw.div`bg-brand p-1 fixed left-0 right-0 bottom-0`;
const timeline = {
  events: [{
    date: 'September 2017 - Present',
    company: 'Linkedin',
    logo: '',
    title: 'Senior UI Engineer',
    description: () => (<><p><span>One of the initial UI Engineers for SRE (India)</span></p>
      <p><span>Streamlined UI apps to follow Linkedin's design pattern as previous web applications were done by SREs and did not follow any standards</span></p>
      <p><span>Hotspots Dashboard to visualize anomalies of all the services in Linkedin</span></p>
      <p><span>Informed: Migrating from legacy dashboard to visualize all the events that gets emitted from any service in Linkedin. Improved website load time to be &#60; 2s as the app is highly crucial in investigating issues</span></p>
      <p><span>Sitemap: D3 based UI to visualize all the nodes (which are alerting) with its overall downstream and upstream in Linkedin at a given point in time and navigating the timeline further with sliders</span></p>
      <p><span>Squiggles: Graphing library used predominantly in all our graphing dashboards. Integrated informed events to show as overlay and greatly reduced the asset size</span></p>
    </>)
  }, {
    date: 'December 2015 - March 2017',
    company: 'Freecharge',
    logo: '',
    title: 'Senior UI Engineer',
    description: () => <><p><span>Responsible for the front-end stack</span></p>
      <p><span>Existing desktop was in JSP, not maintainable and used old build tools. Revamped desktop site from JSP to Isomorphic React,Redux and Node stack with SSR. This greatly improved experience for the user as it was well optimized</span></p>
      <p><span>Streamlined development process</span></p>
      <p><span>Did performance tuning on msite</span></p></>
  }, {
    date: 'April 2015 - December 2015',
    company: 'Pramati Technologies',
    logo: '',
    title: 'Development Engineer',
    description: () => <><p><span>Responsible for developing front-end modules of EHR framework</span></p>
      <p><span> Contributed to generic prototypes and building appointment reminder framework</span></p></>
  }, {
    date: 'June 2012 - April 2015',
    company: 'Cordys Software India (now Opentext)',
    logo: '',
    title: 'Software Engineer',
    description: () => <><p><span>Responsible for developing modules for Cordys Process Suite and building applications on top of it</span></p>
      <p><span>Responsible for making Qontym compatible for BOP4.2+ versions</span></p>
      <p><span> Responsible for developing Dividend Payment, Stop Payment modules and framework for creating dynamic reports based on application objects</span></p></>
  }]
}
const EventGapper = tw.div`mt-5`
const Circle = styled(EventGapper)`position:relative;left:-1rem;top:0.5rem;svg{
    height:20px;width:20px;
}`;

const Event = tw(styled.div`
grid-template-columns: 270px 10px 10px auto;

`)`grid`;
const EventInfo = tw(styled.div`
p{
  position:relative;
  span{
    margin-left:20px;
  }
  &:before{
    content:'';
    position:absolute;
    top:7px;
   height:10px;width:10px;background-color:${primaryColor};border-radius:50%;
  }
}
`)`px-2`;
const EventAction = tw(styled.div`border-color:${primaryColor}`)`p-2 border border-1 rounded-2xl inline-block text-brand`;
const EventTitle = tw.div`p-2 text-lg font-bold`;
const EventDetail = tw(EventGapper)``;
const EventDate = tw(EventGapper)`mr-2 whitespace-nowrap text-center`;
const EventLine = tw(styled.div`background-color:#5057EA;width:2px;margin:0 3px`)``
const ExternalLink = tw.div``
const Info = tw.div`flex justify-between w-full p-4 absolute bottom-0`
const Mobile = tw.div`text-white `
const Email = tw.div`text-white `;
const Education = tw(Section)`p-4 mb-2 pt-2 mt-4`;
const Line = tw.div`grid grid-cols-12 justify-between my-1 auto-cols-max gap-2 text-base`;
const Course = tw(styled.div``)`col-span-4`
const Place = tw.div`col-span-4 text-left`
const Mark = tw.div`font-semibold col-span-2 whitespace-nowrap`
const Title = tw.div`text-lg font-bold px-2`
const Year = tw(styled.div``)`font-semibold col-span-1 	`
function App() {
  return (
    <Body className="">
      <GlobalStyle></GlobalStyle>
      <HeroContainer>
        <MainTitle>Bhuvaneswaran Mohan</MainTitle>
        <Info>
          <Email>bhuvanesh12526@gmail.com</Email>
          <Mobile>+919000936068</Mobile>
        </Info>

      </HeroContainer>
      <PageContainer>
        <Description>
          Versatile Front-end developer with 9 years of experience in developing web applications. Seeking a canvas to showcase my capabilities in an innovative and creative way, culminating in mutual growth.
</Description>
        <Flex>
          <LeftItem>
            <ul className="">
              <li><p>Extensive knowledge in front-end web technologies</p></li>
              <li><p>Fail fast for functionality and optimize for performance throughout</p></li>
              <li><p>Interested in building applications from the scratch following industry best practices</p></li>
              <li><p>Visualize things in a bigger picture which provides an idea of where the functionality fits in and what modules will it affect</p></li>
              <li><p>Always have an eye for usability of the application</p></li>
              <li><p>Keen on streamlining projects in a developer friendly manner</p></li>
              <li><p>Good team player and a go to guy</p></li>
              <li><p>Fan of TDD and pair programming</p></li>
            </ul>
          </LeftItem>
          <RightItem>
            <Skills>
              {
                skills.map(skill => (
                  <Skill>{skill}</Skill>
                ))
              }
            </Skills>
          </RightItem>
        </Flex>
        <TimelineContainer>
          <Timeline>

            {
              timeline.events.map(event =>
                <Event key={event.date}>
                  <EventDate>
                    <div className="rounded-xl bg-white p-2 mr-2">{event.date}</div>
                  </EventDate>
                  <EventLine />
                  <Circle>
                    {clock}
                  </Circle>
                  <EventDetail>
                    <EventAction>{event.company}</EventAction>
                    <ExternalLink href={event.link}><EventTitle>{event.title}</EventTitle></ExternalLink>
                    <EventInfo><event.description></event.description></EventInfo>
                  </EventDetail>

                </Event>
              )
            }
          </Timeline>
        </TimelineContainer>
        <Title>Education</Title>
        <Education>
          <Line>
            <Year>2012</Year>
            <Course>B.Tech Computer Science & Engineering</Course>
            <Place>Pondicherry Engineering College</Place>
            <Mark>8.4 CGPA</Mark>
          </Line>
          <Line>
            <Year>2008</Year>
            <Course>HSC</Course>
            <Place>Vivekanandha Higher Secondary School</Place>
            <Mark>95.8% (School First)</Mark>
          </Line>
          <Line>
            <Year>2006</Year>
            <Course>SSLC</Course>
            <Place>Vivekanandha Higher Secondary School</Place>
            <Mark>92.3%</Mark>
          </Line>
        </Education>
      </PageContainer>
      <Footer />
    </Body>

  );
}

export default App;
