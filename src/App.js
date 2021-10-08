import styled from 'styled-components';

import tw from 'tailwind-styled-components';
const PageContainer = tw.div`container mx-auto max-w-screen-lg p-2`
const primaryColor = '#5057EA';
export const clock = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="14" fill="white"/>
<path d="M14.9999 0C6.72895 0 0 6.72895 0 14.9999C0 23.2709 6.72882 30 14.9997 30C23.2708 30 29.9996 23.2709 29.9996 14.9999C29.9997 6.72895 23.2709 0 14.9999 0ZM14.9999 27.9466C7.86119 27.9466 2.05352 22.1387 2.05352 14.9999C2.05339 7.86119 7.86119 2.05339 14.9999 2.05339C22.1385 2.05339 27.9463 7.86119 27.9463 14.9999C27.9463 22.1388 22.1385 27.9466 14.9999 27.9466Z" fill="#5057EA"/>
<path d="M22.7393 14.7994H15.6139V7.01546C15.6139 6.44845 15.1544 5.98877 14.5872 5.98877C14.0202 5.98877 13.5605 6.44845 13.5605 7.01546V15.8261C13.5605 16.3932 14.0202 16.8528 14.5872 16.8528H22.7393C23.3065 16.8528 23.766 16.3932 23.766 15.8261C23.766 15.2591 23.3063 14.7994 22.7393 14.7994Z" fill="#5057EA"/>
</svg>
const Body = tw(styled.div`
background:rgb(196 196 196 / 10%);
min-height:100vh;
font-family:Montserrat;
`)``;
const HeroContainer = tw.div`h-40 bg-white flex items-center justify-center relative rounded-2xl rounded-t-none`; 
const MainTitle = tw.div`text-5xl text-center text-brand font-bold`;
const Profile = tw(styled.div`bottom:-20%;img{
  border-radius:50%;
  margin-top:-40px;
}`)`relative flex justify-center`
const Section = tw.div`mt-10 bg-white rounded-2xl`;
const Description = tw(Section)`p-4 text-lg`;
const Flex = tw.div`flex`;
const LeftItem = tw(Section)`flex p-4 text-lg flex-2 mr-5 bg-white`
const RightItem = tw(Section)`flex flex-1 ml-5 bg-white`;
const Skills = tw.div`grid grid-cols-2 gap-x-2 justify-between w-full p-4`;
const Skill = tw.div`p-2 border-brand border-1 p-2 rounded-2xl border my-2 text-center flex items-center justify-center text-sm`
const skills = ['HTML', 'CSS', 'Javascript','React', 'Redux', 'AngularJS', 'Ember','Webpack','NextJS','Gatsby','NodeJS']
const TimelineContainer = tw.div`mt-10`;
const TimelineTitle = tw.div`text-center text-xl`;
const Timeline = tw.div``;
const timeline ={
  events:[{
    date:'September 2017 - Present',
    company:'Linkedin',
    logo:'',
    title:'Senior UI Engineer',
    description:'Responsible for front-end stack - Revamped desktop site from JSP to Isomorphic React,Redux,Node stack - Streamlined development process - Did performnace tuning on msite.'
  },{
    date:'December 2015 - March 2017',
    company:'Freecharge',
    logo:'',
    title:'Senior UI Engineer',
    description:'Responsible for front-end stack - Revamped desktop site from JSP to Isomorphic React,Redux,Node stack - Streamlined development process - Did performnace tuning on msite.'
  },{
    date:'April 2015 - December 2015',
    company:'Pramati Technologies',
    logo:'',
    title:'Development Engineer',
    description:' Responsible for developing front-end modules of EHR framework, Contributed to generic prototypes and building appointment reminder framework.'
  },{
    date:'June 2012 - April 2015',
    company:'Cordys Software India (now Opentext)',
    logo:'',
    title:'Software Engineer',
    description:'Responsible for developing modules for Cordys Process Suite and building applications on top of it - Responsible for making Qontym compatible for BOP4.2+ versions - Responsible for developing Dividend Payment, Stop Payment modules and framework for creating dynamic reports based on application objects'
  }]
}
const EventGapper = tw.div`mt-10`
const Circle = styled(EventGapper)`position:relative;left:-1rem;top:0.5rem;svg{
    height:20px;width:20px;
}`;

const Event = tw(styled.div`
grid-template-columns: 270px 10px 10px auto;

`)`grid`;
const EventInfo = tw.div`px-2`;
const EventAction = tw(styled.div`border-color:${primaryColor}`)`p-2 border border-1 rounded-2xl inline-block text-brand`;
const EventTitle = tw.div`p-2 text-lg font-bold`;
const EventDetail = tw(EventGapper)``;
const EventImage = tw.div`px-2`;
const EventDate = tw(EventGapper)`mr-2 whitespace-nowrap text-center`;
const EventLine = tw(styled.div`background-color:#5057EA;width:2px;margin:0 3px`)``
const ExternalLink = tw.div``
function App() {
  return (
    <Body className="">
      <PageContainer>
<HeroContainer>
  <MainTitle>Bhuvaneswaran Mohan</MainTitle>
</HeroContainer>
<Profile>
    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGl0Jnl1ef58g/profile-displayphoto-shrink_100_100/0/1591899143948?e=1639008000&v=beta&t=yV-cp_fDfKvX9iknrOjmRmrqXxYc8Fwdroul50LksSA"></img>
  </Profile>
<Description>
A front-end developer with 9 years of experience in developing web applications. Seeking a platform to utilize my potential capabilities in an innovative and creative way, culminating in mutual growth.
</Description>
<Flex>
  <LeftItem>
    <ul className="list-disc list-inside	">
   <li> Extensive knowledge in front-end web technologies.</li>
   <li>Keen on streamlining projects in a developer friendly manner.</li>
   <li>Interested in building stuffs from the scratch following best practices.</li>
   <li>Sees things in a bigger picture which provides a idea of where the functionality fits in and what modules will it affect.</li>
   <li>Always have an eye to usability of the application.</li>
   <li>Good team player and a go to guy.</li>
   <li>Fan of TDD and pair programming.</li>
    </ul>
  </LeftItem>
  <RightItem>
    <Skills>
      {
        skills.map(skill=>(
          <Skill>{skill}</Skill>
        ))
      }
    </Skills>
  </RightItem>
</Flex>
<TimelineContainer>
                    {/* <TimelineTitle>Related Post Timeline</TimelineTitle> */}
                    <Timeline>

                        {
                           
                                
                                  timeline.events.map(event =>
                                <Event key={event.date}>
                                    <EventDate>
                                        <div className="shadow-lg rounded-xl bg-white p-2 mr-2">{event.date}</div>
                                      </EventDate>
                                    <EventLine />
                                    <Circle>
                                        {clock}
                                    </Circle>
                                    <EventDetail>
                                        <EventAction>{event.company}</EventAction>
                                        <ExternalLink href={event.link}><EventTitle>{event.title}</EventTitle></ExternalLink>
                                        <EventInfo>{event.description}</EventInfo>
                                    </EventDetail>
                           
                                </Event>
                            )
                           }
                    </Timeline>
                </TimelineContainer>
      </PageContainer>
    </Body>
  );
}

export default App;
