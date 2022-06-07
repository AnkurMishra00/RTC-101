
import './App.css';
import { Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { InitialFocus } from './model';
import { DrawerExample } from './component/Drawer';
let breadcrumb = ["Home","Docs","Pune...",]
function App() {
  return (
    <div className="App">
      <div><InitialFocus /></div>
      <div><DrawerExample /></div>
      <Breadcrumb>
      {breadcrumb.map((breadcrumb)  => (
        <BreadcrumbItem>
        <BreadcrumbLink href='#' _hover={{color:"red"}}>{breadcrumb}</BreadcrumbLink>
      </BreadcrumbItem>
      ))}
  

  {/* <BreadcrumbItem>
    <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem> */}
</Breadcrumb>
      <Button colorScheme='teal' size='xs'>
    Button
  </Button>



  <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} backgroundColor ={'tomato'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
      <Box boxSize='sm'>
      <Image src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' alt='Dan Abramov' />
      </Box>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
      <Box boxSize='sm'>
      <Image  src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt='Dan Abramov' />
      </Box>
    </TabPanel>
    
    <TabPanel>
      <p>three!</p>
      <Box boxSize='200px' objectFit='cover'>
       <Image  src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' alt='Dan Abramov' />
       </Box>
    </TabPanel>
  </TabPanels>
</Tabs>


<Box boxSize='sm'>
  <Image src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='Dan Abramov' />
</Box>

    </div>
  );
}

export default App;
