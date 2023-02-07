import React, { useState } from 'react';
import { Stack, Text, Button, Center, Divider, Card, CardHeader, CardBody, CardFooter, Heading, Link, useBreakpointValue, Tabs, TabList, TabPanels, Tab, TabPanel, Badge, Container, useColorModeValue } from '@chakra-ui/react';
// import { FcLock } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';
import { ExternalLinkIcon, MinusIcon } from '@chakra-ui/icons'


export default function SimpleCookiePreference() {
    return (
        <>
            <Center>
                <Stack boxShadow="lg" borderRadius="sm" minW={'4xl'} mt="-10px">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent="space-between">
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            boxShadow='md'
                        >
                            <Stack>
                                <CardBody >
                                    <Text
                                        align={useBreakpointValue({ base: 'center', md: 'center' })}
                                        fontWeight={700}
                                        fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
                                        lineHeight={'110%'}>
                                        <Text as={'span'} color={'red.500'}> Course
                                        </Text> Outline
                                        <Divider mt="10px" mb="10px" />
                                    </Text>
                                    <Heading size='md' minW={'4xl'} maxW={'1xl'}> <MinusIcon color="red.500" /> Blockchain and Metaverse Theory</Heading>
                                    <Link style={{ textDecoration: 'none' }} href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0' isExternal>
                                        <Text pt='3' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" />  Mastering Blockchain - Fourth Edition by Imran Bashir.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067 ' isExternal>
                                        <Text minW={'4xl'} ml="20px">
                                            <ExternalLinkIcon color="red.500" />  The Metaverse: And How It Will Revolutionize Everything by Matthew Ball.
                                        </Text>
                                    </Link>
                                    <Divider mt="10px" mb="10px" />
                                    <Heading size='md' minW={'4xl'}><MinusIcon color="red.500" /> Smart Contract Development in Solidity </Heading>
                                    <Link style={{ textDecoration: 'none' }} href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0' isExternal>
                                        <Text pt='3' minW={'4xl'} ml="20px">
                                            <ExternalLinkIcon color="red.500" /> Solidity Programming Essentials - Second Edition By Ritesh Modi.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181' isExternal>
                                        <Text minW={'4xl'} ml="20px">
                                            <ExternalLinkIcon color="red.500" /> Solidity Learning Repo.
                                        </Text>
                                    </Link>
                                    <Divider mt="10px" mb="10px" />
                                    <Heading size='md' minW={'4xl'}><MinusIcon color="red.500" /> Dapp Development using Ethers.js and Next.js 13 </Heading>
                                    <Link style={{ textDecoration: 'none' }} href='https://github.com/panaverse/dapps-nextjs' isExternal>
                                        <Text pt='3' minW={'4xl'} ml="20px">
                                            <ExternalLinkIcon color="red.500" /> Dapp Learning Repo.
                                        </Text>
                                    </Link>
                                    <Divider mt="10px" mb="10px" />
                                    <Heading size='md' minW={'4xl'}><MinusIcon color="red.500" /> Tokennomics </Heading>
                                    <Divider mt="10px" mb="10px" />
                                    <Heading size='md' minW={'4xl'}><MinusIcon color="red.500" /> Blockchain Project: Create a Token and Launch ICO/IEO/IDO </Heading>
                                    <Text pt='3' minW={'4xl'} maxW={'4xl'} ml="20px">
                                        As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects, and you'll notice that blockchain projects absolutely dominate the list.
                                    </Text>
                                    <Link style={{ textDecoration: 'none' }} href='https://phemex.com/blogs/what-is-a-dex-ido' isExternal>
                                        <Text pt='3' minW={'4xl'} ml="20px">
                                            <ExternalLinkIcon color="red.500" /> Understand the difference between IDO vs. IEO vs. ICO.
                                        </Text>
                                    </Link>
                                    <Text pt='3' minW={'4xl'} ml="20px" fontWeight='800'>
                                        Also check these links for latest listings:
                                    </Text>
                                    <Link style={{ textDecoration: 'none' }} href='https://icodrops.com' isExternal>
                                        <Text pt='3' minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> ICO list at ICO Drops.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://topicolist.com' isExternal>
                                        <Text minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> ICO List of Best New Initial Coin Offerings.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://cryptototem.com/ico-list' isExternal>
                                        <Text minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://www.icolistingonline.com' isExternal>
                                        <Text minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> ICO List Online.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://coincodex.com/ieo-list/binance' isExternal>
                                        <Text minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> Binance IEO List.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://www.coinspeaker.com/ieo/platform/binance-launchpad' isExternal>
                                        <Text minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> Binance Launchpad.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://icomarks.com/ieo' isExternal>
                                        <Text minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> IEO List.
                                        </Text>
                                    </Link>
                                    <Link style={{ textDecoration: 'none' }} href='https://polkastarter.com' isExternal>
                                        <Text minW={'4xl'} ml="40px">
                                            <ExternalLinkIcon color="red.500" /> Polkastarter.
                                        </Text>
                                    </Link>
                                    <Divider mt="10px" mb="10px" />
                                    <Heading textAlign='center' size='lg' minW={'4xl'} color='red.500'> Projects</Heading>
                                    <Tabs colorScheme='red' size='md' isFitted >
                                        <TabList>
                                            <Tab>1</Tab>
                                            <Tab>2</Tab>
                                            <Tab>3</Tab>
                                            <Tab>4</Tab>
                                            <Tab>5</Tab>
                                            <Tab>6</Tab>
                                            <Tab>7</Tab>
                                            <Tab>8</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 1
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> How to Launch a IEO on Binance Launchpad </Heading>
                                                <Link style={{ textDecoration: 'none' }} href='https://appinventiv.com/blog/how-to-launch-an-ieo' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Read How to Launch an IEO.
                                                    </Text>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04' isExternal>
                                                    <Text minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad.
                                                    </Text>
                                                </Link>
                                                <Text minW={'4xl'} ml="20px" fontWeight='700'>
                                                    <Text as="span" color="red.500" >Note : </Text> Also document the alternatives to Binance Launchpad.
                                                </Text>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 2
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> How to Launch a IDO on Polkastarter </Heading>
                                                <Link style={{ textDecoration: 'none' }} href='https://cryptorank.io/fundraising-platforms' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Review the list of top fundraising platforms.
                                                    </Text>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://polkastarter.com' isExternal>
                                                    <Text minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 3
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> Create a Pako Token </Heading>
                                                <Text pt='3' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Review the list By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.
                                                </Text>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 4
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> Develop Crowd Sale Contract </Heading>
                                                <Text pt='3' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token).
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Implement a payable buyToken() function.
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought.
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
                                                </Text>
                                                <Link style={{ textDecoration: 'none' }} href='https://docs.openzeppelin.com/contracts/4.x/crowdsales' isExternal>
                                                    <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px"> <ExternalLinkIcon color="red.500" /> You can use the openzeppelin crowd sale contracts however you will have to update the code to the latest solidity version.
                                                    </Text>
                                                </Link>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.
                                                </Text>
                                                <Link style={{ textDecoration: 'none' }} href='https://docs.openzeppelin.com/contracts/4.x/access-control' isExternal>
                                                    <Text minW={'4xl'} mt='4px' ml="20px" fontWeight='700'>
                                                        <Text as="span" color="red.500" > <ExternalLinkIcon color="red.500" /> Note : </Text> Before you get started writing the token contract we suggest you review the access control.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 5
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> Trying it with MetaMask </Heading>
                                                <Text pt='3' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    When it's done, take note of what addresses the contracts were uploaded to and copy it!
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    To do this, open the side menu and click on the "Add token" button to get started:
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.
                                                </Text>
                                                <Text pt='2' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                    After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!
                                                </Text>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 6
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> Trying it with Multisignature Wallets </Heading>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Read.
                                                    </Text>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://gnosis-safe.io' isExternal>
                                                    <Text minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Now use Gnosis Safe with multi-sigs to do what you did in the last part.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 7
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> Sending Tokens using Ethers.js </Heading>
                                                <Text pt='2' minW={'4xl'} ml="20px">
                                                    Write a Typescript program to send Pako Token to some friend's address using Ethers.js.
                                                </Text>
                                                <Link style={{ textDecoration: 'none' }} href='https://ethereum.org/en/developers/tutorials/send-token-etherjs' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> You may follow this tutorial.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Project 8
                                                </Badge>
                                                <Heading size='md' mt="5px" minW={'4xl'}><MinusIcon color="red.500" /> Create, Deploy, Mint, and Sell an NFT </Heading>
                                                <Link style={{ textDecoration: 'none' }} href='https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Read this NFT tutorial series.
                                                    </Text>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://docs.openzeppelin.com/contracts/4.x/erc721' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Create a NFT contract using the OpenZepplen ERC721 NFT Standard.
                                                    </Text>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://docs.openzeppelin.com/contracts/4.x/erc721#Presets' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> You may use the Preset ERC721 contract.
                                                    </Text>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://opensea.io' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace  for sale.
                                                    </Text>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Implement a ERC721 Market.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack >
            </Center >
            <Container maxW={'12xl'} mt='50px' bg={useColorModeValue('gray.100', 'gray.700')}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    py={{ base: 6, md: 12 }}
                >
                    <Heading
                        fontWeight={700}
                        fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}>
                        Quarter V
                    </Heading>
                    <Text as="b" color={'red.500'} maxW={'4xl'}
                        fontSize={{ base: '1xl', sm: '1xl', md: '2xl' }}>
                        MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences.
                    </Text>
                    <Text as="b" fontSize={'14pt'}>
                        (Duration: 13 Weeks)
                    </Text>
                </Stack>
            </Container>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 4, md: 6 }}
                py={{ base: 3, md: 6 }}>
                <Heading
                    fontWeight={700}
                    fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
                    lineHeight={'110%'}>
                    Course <Text as={'span'} color={'red.500'}>  Description
                    </Text>
                </Heading>
                <Text color={useColorModeValue('gray.700', 'gray.400')} maxW={'3xl'} fontSize={'lg'}>
                    The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.
                </Text>
            </Stack>
            <Center>
                <Stack boxShadow="lg" borderRadius="sm" minW={'4xl'} mt="10px" mb="30px">
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent="space-between">
                        <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            boxShadow='md'
                        >
                            <Stack>
                                <CardBody >
                                    <Text
                                        align={useBreakpointValue({ base: 'center', md: 'center' })}
                                        fontWeight={700}
                                        fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
                                        lineHeight={'110%'}>
                                        <Text as={'span'} color={'red.500'}> Course
                                        </Text> Outline
                                        <Divider mt="10px" mb="10px" />
                                    </Text>
                                    <Heading size='md' minW={'4xl'} maxW={'1xl'}> <MinusIcon color="red.500" /> Open Metaverse Web Development</Heading>
                                    <Link style={{ textDecoration: 'none' }} href='https://github.com/panaverse/metaverse-web' isExternal>
                                        <Text pt='3' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" /> Open Metaverse Learning Repo.
                                        </Text>
                                    </Link>
                                    <Divider mt="10px" mb="10px" />
                                    <Heading size='md' minW={'4xl'} maxW={'1xl'}> <MinusIcon color="red.500" /> Blender 3D asset Creation for the Metaverse (Remote Zoom Class).</Heading>
                                    <Text pt='3' ml="20px" minW={'4xl'} maxW={'4xl'}>
                                        Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.
                                    </Text>
                                    <Link style={{ textDecoration: 'none' }} href='https://www.blender.org/download' isExternal>
                                        <Text pt='3' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" /> Blender 3.3+ Download.
                                        </Text>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD' isExternal>
                                        <Text pt='1' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" /> Blender 3.0 Beginner Tutorial.
                                        </Text>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} href='https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit' isExternal>
                                        <Text pt='1' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" /> Blender 3.0 Hotkey.
                                        </Text>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' isExternal>
                                        <Text pt='1' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" /> Blender Projects Textbook: Blender by Example 2nd Edition.
                                        </Text>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} href='https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5' isExternal>
                                        <Text pt='1' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" /> Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain.
                                        </Text>
                                    </Link>

                                    <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=H7T0SzdFHwg' isExternal>
                                        <Text pt='1' ml="20px" minW={'4xl'}>
                                            <ExternalLinkIcon color="red.500" /> Best Hardware Performance for Blender Rendering.
                                        </Text>
                                    </Link>
                                    <Divider mt="10px" mb="10px" />
                                    <Heading textAlign='center' size='lg' minW={'4xl'} color='red.500'> Assignments</Heading>
                                    <Tabs colorScheme='red' size='md' isFitted >
                                        <TabList>
                                            <Tab>1</Tab>
                                            <Tab>2</Tab>
                                            <Tab>3</Tab>
                                            <Tab>4</Tab>
                                            <Tab>5</Tab>
                                            <Tab>6</Tab>
                                        </TabList>
                                        <TabPanels>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Assignment 1
                                                </Badge>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Build a 3D Donut using Blender 3 as shown in these video tutorials.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Assignment 2
                                                </Badge>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book Blender by Example 2nd Edition.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Assignment 3
                                                </Badge>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' isExternal>
                                                    <Text pt='3' minW={'4xl'} maxW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book Blender by Example 2nd EditionModeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Assignment 4
                                                </Badge>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Assignment 5
                                                </Badge>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                            <TabPanel>
                                                <Badge colorScheme='red' p='5px' borderRadius='5px'>
                                                    Assignment 6
                                                </Badge>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=bpvh-9H8S1g ' isExternal>
                                                    <Text pt='3' minW={'4xl'} ml="20px">
                                                        <ExternalLinkIcon color="red.500" /> Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials.
                                                    </Text>
                                                </Link>
                                            </TabPanel>
                                        </TabPanels>
                                    </Tabs>
                                </CardBody>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack >
            </Center >
        </>
    );
}