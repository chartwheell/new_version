// Lookup tables kept apart from the artwork modules so each .jsx file
// exports components only (keeps React Fast Refresh working).
import { OemArt, ProgrammaticArt, NativeArt, InfluencerArt, RewardedArt, SearchArt } from './channelArt'
import {
  GamingCardArt,
  FintechCardArt,
  EcomCardArt,
  TravelCardArt,
  EntCardArt,
  MobilityCardArt,
} from './catCardArt'
import {
  GamingGraphic,
  FintechGraphic,
  EcomGraphic,
  TravelGraphic,
  EntGraphic,
  MobilityGraphic,
} from './categoryVisual'

export const channelArt = {
  oem: OemArt,
  programmatic: ProgrammaticArt,
  native: NativeArt,
  influencer: InfluencerArt,
  rewarded: RewardedArt,
  search: SearchArt,
}

export const catCardArt = {
  gaming: GamingCardArt,
  fintech: FintechCardArt,
  ecom: EcomCardArt,
  travel: TravelCardArt,
  ent: EntCardArt,
  mobility: MobilityCardArt,
}

export const categoryGraphics = {
  gaming: GamingGraphic,
  fintech: FintechGraphic,
  ecom: EcomGraphic,
  travel: TravelGraphic,
  ent: EntGraphic,
  mobility: MobilityGraphic,
}
