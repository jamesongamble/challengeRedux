import qwest from 'qwest'
import _ from 'lodash'
import resolve from 'resolve'

export const ADS = 'ADS'
export const ADS_METRICS = 'ADS_METRICS'



// ------------------------------------
// Actions
// ------------------------------------

// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.

export function getAds (): Action {

  qwest.get(`/ads`)
    .then((xhr, response) => {
      console.log(response)
      this.setState({"ads": response})
      resolve()
    })
  return {
    type: ADS,
    payload: response
  }

}
export function getAdsMetrics (): Action {
  qwest.get(`/ads_metrics`)
    .then((xhr, response) => {
      console.log(response)
      this.setState({"ads_metrics": response})
      resolve()
    })
  return {
    type: ADS_METRICS,
    payload: response
  }
}

export const actions = {
  getAds,
  getAdsMetrics
}
