/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Translate, {translate} from '@docusaurus/Translate'
import {GridBlock} from '../components/GridBlock'
import {Container} from '../components/Container'
import {Showcase} from '../components/Showcase'
import Layout from '@theme/Layout'

const HomeSplash = props => {
  const {language = ''} = props
  const {siteConfig} = useDocusaurusContext()
  const {baseUrl, customFields} = siteConfig
  const docsPart = `${customFields.docsPath ? `${customFields.docsPath}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const SplashContainer = props => (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    </div>
  )

  const Logo = props => (
    <div className="projectLogo">
      <img
        src={props.img_src}
        alt={translate({
          message: 'Project Logo',
          description: 'The alternative logo text',
        })}
      />
    </div>
  )

  const ProjectTitle = () => (
    <div>
      <h2 className="projectTitle">{siteConfig.title}</h2>
      <div className="projectTaglineWrapper">
        <p className="projectTagline">
          <Translate id="projectTagline">
            Simple and complete testing utilities that encourage good testing
            practices
          </Translate>
        </p>
      </div>
    </div>
  )

  const Button = props => (
    <a
      className="button button--primary button--outline"
      href={props.href}
      target={props.target}
    >
      {props.children}
    </a>
  )

  return (
    <SplashContainer>
      <Logo img_src={`${baseUrl}img/logo-large.png`} />
      <div className="inner">
        <ProjectTitle siteConfig={siteConfig} />
        <div className="pluginWrapper buttonWrapper">
          <Button href={`${baseUrl}docs/`}>
            <Translate id="gettingStartedButton">Get Started</Translate>
          </Button>
        </div>
      </div>
    </SplashContainer>
  )
}

export default class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props
    const {baseUrl} = siteConfig

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align || 'center'}
          imageAlign={props.imageAlign || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    const FeatureCallout = () => (
      <Container className="" background={'light'} padding={['top', 'bottom']}>
        <div style={{textAlign: 'center'}}>
          <p>
            <i>
              <Translate id="homepageQuote.firstPart">
                The more your tests resemble the way your software is used,
              </Translate>
              <br />
              <Translate id="homepageQuote.secondPart">
                the more confidence they can give you.
              </Translate>
            </i>
          </p>
        </div>
      </Container>
    )

    const Problem = () => (
      <React.Fragment>
        <Block background={'light'} align="left">
          {[
            {
              title: '',
              content: translate({
                message:
                  "## The Problem \n - You want tests for your UI that avoid including implementation details and rather focus on making your tests give you the confidence for which they are intended. \n - You want your tests to be maintainable so refactors _(changes to implementation but not functionality)_ don't break your tests and slow you and your team down.",
                id: 'theProblem',
              }),
              image: `${baseUrl}img/interrobang-128x128.png`,
              imageAlt: translate({
                message: 'The problem (picture of a question mark)',
                id: 'theProblemIcon',
              }),
              imageAlign: 'left',
            },
          ]}
        </Block>
      </React.Fragment>
    )

    const Solution = () => [
      <Block background={null} align="left" key="solution-star">
        {[
          {
            title: '',
            image: `${baseUrl}img/star-128x128.png`,
            imageAlign: 'right',
            imageAlt: translate({
              message: 'The solution (picture of a star)',
              id: 'theSolutionIcon',
            }),
            content: translate({
              message:
                '## The Solution \n The Testing Library family of libraries is a very light-weight solution for testing without all the implementation details. The main utilities it provides involve querying for nodes similarly to how users would find them. In this way, testing-library helps ensure your tests give you confidence in your UI code.',
              id: 'theSolution',
            }),
          },
        ]}
      </Block>,
      <Block background={'light'} align="left" key="solution-trophy">
        {[
          {
            title: translate({
              message: 'Guiding Principle',
              id: 'guidingPrincipleTitle',
            }),
            image: `${baseUrl}img/trophy-128x128.png`,
            imageAlign: 'left',
            imageAlt: translate({
              message: 'The guiding principle (picture of a trophy)',
              id: 'theGuidingPrincipleIcon',
            }),
            content: translate({
              message:
                '_The more your tests resemble the way your software is used, the more confidence they can give you._',
              id: 'theGuidingPrinciple',
            }),
          },
        ]}
      </Block>,
    ]

    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            content: translate({
              message:
                'Tests only break when your app breaks, not implementation details',
              id: 'featureMaintainable',
            }),
            image: `${baseUrl}img/wrench-128x128.png`,
            imageAlign: 'top',
            title: translate({
              message: 'Write Maintainable Tests',
              id: 'featureMaintainableTitle',
            }),
          },
          {
            content: translate({
              message: 'Interact with your app the same way as your users',
              id: 'featureConfidence',
            }),
            image: `${baseUrl}img/check-128x128.png`,
            imageAlign: 'top',
            title: translate({
              message: 'Develop with Confidence',
              id: 'featureConfidenceTitle',
            }),
          },
          {
            content: translate({
              message:
                'Built-in selectors find elements the way users do to help you write inclusive code',
              id: 'featureAccessible',
            }),
            image: `${baseUrl}img/tada-128x128.png`,
            imageAlign: 'top',
            title: translate({
              message: 'Accessible by Default',
              id: 'featureAccessibleTitle',
            }),
          },
        ]}
      </Block>
    )

    const Ecosystem = () => (
      <Block layout="fourColumn" background={null}>
        {[
          {
            image: `${baseUrl}img/react-128x128.png`,
            imageAlign: 'top',
            title: '[React](./docs/react-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/cypress-128x128.png`,
            imageAlign: 'top',
            title: '[Cypress](./docs/cypress-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/testcafe-128x128.jpg`,
            imageAlign: 'top',
            title: `[Testcafe](./docs/testcafe-testing-library/intro)`,
          },
          {
            image: `${baseUrl}img/svelte-logo.png`,
            imageAlign: 'top',
            title: '[Svelte](./docs/svelte-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/vue-400x400.png`,
            imageAlign: 'top',
            title: '[Vue](./docs/vue-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/angular-250x250.png`,
            imageAlign: 'top',
            title: '[Angular](./docs/angular-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/reason-200x200.png`,
            imageAlign: 'top',
            title: '[ReasonReact](./docs/bs-react-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/puppeteer-275x275.png`,
            imageAlign: 'top',
            title: '[Puppeteer](./docs/pptr-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/react-native-128x128.png`,
            imageAlign: 'top',
            title: '[React Native](./docs/react-native-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/preact-128x128.png`,
            imageAlign: 'top',
            title: '[Preact](./docs/preact-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/nightwatch-128x128.png`,
            imageAlign: 'top',
            title: '[Nightwatch](./docs/nightwatch-testing-library/intro)',
          },
          {
            image: `${baseUrl}img/construction-128x128.png`,
            imageAlign: 'top',
            title: translate({
              message: '[And more...](./docs/ecosystem-user-event)',
              id: 'andMoreItem',
            }),
          },
        ]}
      </Block>
    )

    const ShowcaseWrapper = () => {
      if ((siteConfig.customFields.users || []).length === 0) {
        return null
      }

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className="productShowcaseSection paddingBottom paddingTop">
          <h2>
            <Translate id="whoIsUsingThisTitle">Who is Using This?</Translate>
          </h2>
          <div className="logos">
            <Showcase
              users={siteConfig.customFields.users.filter(u => u.pinned)}
            />
          </div>
          <a
            className="button button--primary button--outline"
            href={pageUrl('users')}
          >
            <Translate id="whoIsUsingThisButton">
              More Testing Library Users
            </Translate>
          </a>
        </div>
      )
    }

    const Awards = () => {
      return (
        <div className="awardsSection paddingBottom paddingTop">
          <h2>
            <Translate id="awardsTitle">Awards</Translate>
          </h2>
          <Block layout="threeColumn" background={null}>
            {[
              {
                image: `${baseUrl}img/impactful-conribution-award-399x544.png`,
                imageAlign: 'top',
                imageLink: 'https://osawards.com/react/2019',
                imageAlt: translate({
                  message:
                    'Winner of the Open Source Awards 2019 in the category "The most impactful contribution to the community"',
                  id: 'awardImpactful',
                }),
              },
              {
                image: `${baseUrl}img/highest-satisfaction-638x574.png`,
                imageAlign: 'top',
                imageLink: 'https://2020.stateofjs.com/en-US/awards/',
                imageAlt: translate({
                  message:
                    'Winner of the State of JS 2020 award for the technology with the highest percentage of satisfied users',
                  id: 'awardStateOfJs',
                }),
              },
            ]}
          </Block>
        </div>
      )
    }

    return (
      <Layout
        permalink="/"
        title={siteConfig.title}
        description={siteConfig.tagline}
      >
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <Problem />
          <Solution />
          <ShowcaseWrapper />
          <Ecosystem />
          <Awards />
        </div>
      </Layout>
    )
  }
}
