/* WORKS DATA */

import {
  defaultButtonAreaData,
  textStartFalseButtonAreaData,
  authSiteButtonAreaData,
  thisSiteButtonAreaData,
  pokeAppButtonAreaData,
  mtgAppButtonAreaData
} from '../../../components'

import {
  defaultWorksInfoData,
  worksInfoTextStartFalseData,
  authSiteInfoData,
  thisSiteInfoData,
  pokeAppInfoData,
  mtgAppInfoData,
} from '../..'

export const authSiteData = {
  ...authSiteInfoData,
  buttonAreaData: authSiteButtonAreaData
}

export const thisSiteData = {
  ...thisSiteInfoData,
  buttonAreaData: thisSiteButtonAreaData
}

export const pokeAppData = {
  ...pokeAppInfoData,
  buttonAreaData: pokeAppButtonAreaData
}

export const mtgAppData = {
  ...mtgAppInfoData,
  buttonAreaData: mtgAppButtonAreaData
}

export const defaultData = {
  ...defaultWorksInfoData,
  buttonAreaData: defaultButtonAreaData
}

export const textStartFalseData = {
  ...worksInfoTextStartFalseData,
  buttonAreaData: textStartFalseButtonAreaData
}
