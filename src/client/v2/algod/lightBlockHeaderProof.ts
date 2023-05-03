import JSONRequest from '../jsonrequest';
import HTTPClient from '../../client';
import IntDecoding from '../../../types/intDecoding';
import { LightBlockHeaderProof as LBHP } from './models/types';

export default class LightBlockHeaderProof extends JSONRequest<LBHP> {
  constructor(c: HTTPClient, intDecoding: IntDecoding, private round: number) {
    super(c, intDecoding);

    this.round = round;
  }

  path() {
    return `/v2/blocks/${this.round}/lightheader/proof`;
  }
}
