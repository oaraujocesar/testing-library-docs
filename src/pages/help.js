/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Translate, {translate} from '@docusaurus/Translate'
import {GridBlock} from '../components/GridBlock'

const ExternalLink = props => (
  <a target="_blank" rel="noreferrer noopener" {...props} />
)
const Link = props => <a {...props} />

export default function Help(props) {
  const {language = ''} = props
  const {siteConfig} = useDocusaurusContext()
  const {baseUrl, docsUrl} = siteConfig
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
  const langPart = `${language ? `${language}/` : ''}`
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

  const supportLinks = [
    {
      content: translate({
        message:
          'Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/react-testing-library)',
        id: 'helpStackOverFlow',
      }),
      title: 'Stack Overflow',
    },
    {
      content: translate({
        message:
          'Discuss issues with community members on [Spectrum](https://spectrum.chat/testing-library)',
        id: 'helpSpectrum',
      }),
      title: 'Spectrum',
    },
    {
      content: translate({
        message: 'Chat on [Discord](https://discord.gg/testing-library)',
        id: 'helpDiscord',
      }),
      title: 'Discord',
    },
    {
      content: translate({
        message: 'Stay up to date by following the [blog](/blog)',
        id: 'helpBlog',
      }),
      title: 'Blog',
    },
    {
      content: translate({
        message: 'Browse [Learning Material](/docs/learning)',
        id: 'helpResources',
      }),
      title: translate({message: 'Resources', id: 'helpResourcesTitle'}),
    },
    {
      content: translate({
        message: `Get support on [GitHub]https://github.com/testing-library/dom-testing-library)`,
        id: 'helpGitHub',
      }),
      title: 'GitHub',
    },
  ]

  return (
    <Layout
      permalink="/help"
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <div className="wrapper">
        <div className="mainContainer documentContainer postContainer helpContainer">
          <div>
            <header>
              <h1>
                <Translate id="helpTitle">Need help?</Translate>
              </h1>
            </header>
            <GridBlock
              contents={supportLinks.slice(0, 3)}
              layout="threeColumn"
              align="left"
            />
            <GridBlock
              contents={supportLinks.slice(3)}
              layout="threeColumn"
              align="left"
            />
            <section>
              <h2>
                <Translate id="helpBuyACourse">Buy a Course</Translate>
              </h2>
              <p>
                <Translate id="helpCourseContentFirst">
                  Learn how to test JavaScript with
                </Translate>{' '}
                <ExternalLink href="https://kentcdodds.com">
                  Kent C. Dodds
                </ExternalLink>
                ,{' '}
                <Translate id="helpCourseContentSecond">
                  the creator of Testing Library, on
                </Translate>{' '}
                <ExternalLink href="https://testingjavascript.com">
                  TestingJavaScript.com
                </ExternalLink>
              </p>
              <div>
                <ExternalLink href="https://testingjavascript.com">
                  <img
                    width="500"
                    alt={translate({
                      message:
                        'TestingJavaScript.com Learn the smart, efficient way to test any JavaScript application.',
                      id: 'helpCourseAltText',
                    })}
                    src={`${baseUrl}img/testingjavascript.jpg`}
                  />
                </ExternalLink>
              </div>
            </section>
            <header className="postHeader">
              <h1>
                <Translate id="helpContribution">Want to help?</Translate>
              </h1>
            </header>
            <p>
              <Translate id="helpContributionFirstParagraph">
                Thanks! The Testing Library maintainers are happy to maintain
                this library along with you, the community. We aren't looking
                for funding, but we need everyone to pitch in to make this
                project and community successful and improve tests for everyone
                in the long run.
              </Translate>
            </p>
            <p>
              <Translate id="helpContributionSecondParagraph">
                Please consider helping us answer community questions and update
                documentation content via the help links above. You can also
                help support
              </Translate>{' '}
              <ExternalLink href="https://kentcdodds.com">
                Kent C. Dodds
              </ExternalLink>{' '}
              <Translate id="helpContributionThirdParagraph">
                financially by purchasing his
              </Translate>{' '}
              <ExternalLink href="https://kentcdodds.com/courses">
                <Translate id="helpContributionFourthParagraph">
                  courses
                </Translate>
              </ExternalLink>{' '}
              <Translate id="helpContributionFifthParagraph">or</Translate>{' '}
              <ExternalLink href="https://kentcdodds.com/workshops/">
                <Translate id="helpContributionSixthParagraph">
                  remote workshops
                </Translate>
              </ExternalLink>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
