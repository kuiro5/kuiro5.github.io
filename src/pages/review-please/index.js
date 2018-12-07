import React from 'react'
import reviewPleaseImg from '../../images/review-please.png'
import Bio from '../../components/Bio'
import Layout from '../../components/Layout'
import { rhythm } from '../../utils/typography'

const ReviewPlease = ({ location }) => (
  <Layout location={location}>
    <h1>Review Please 👀</h1>
    <p>
      Managing pull requests across multiple teams in different timezones had
      become a bottleneck for the engineering team. The Github email
      notifications were often getting lost in inboxes, and there was no
      centralized view of pull requests.
    </p>
    <p>
      Given that Slack is the central hub for communication and activity, I
      decided to build a Slack bot that would send a message to a specified
      channel, notifying members when they had been requested for a review. This
      provided meaningful notifications and a centralized view of pull requests.
    </p>
    <p>
      I used Go to build the bot, as I had been recently learning it. Review
      Please receives a webhook event from Github when a review is requested,
      maps the requester's Github username to their Slack username, creates a
      message, and sends it to a Slack webhook.
    </p>
    <p>
      <img src={reviewPleaseImg} />
    </p>
    <p>
      Review Please has been utilized by 5 scrum teams facilitating nearly 1000
      reviews as of July 2018.
    </p>
    <hr
      style={{
        marginBottom: rhythm(1),
      }}
    />
    <Bio />
  </Layout>
)

export default ReviewPlease
