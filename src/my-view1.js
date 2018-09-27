/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-ajax/iron-ajax.js'

class MyView1 extends PolymerElement {

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .content {
          float: right;
          margin-right: 33.33%;
        }
        iron-image {
        width: 200px;
        height: 300px;
        background-color: lightgray;
        margin-top:-33.33px;
        border-radius: 3px;
        padding: 0;
        float: left;
      }
      button {
        box-sizing: border-box;
        width: 120px;
        height: 40px;
        color: white;
        background-color: #f7cb4d;
        display: block;
        padding-top: 5px;
        padding-left: 8px;
        border-radius: 80px;
        outline: none;
        text-decoration: none;
        border: none;
      }
      button:hover {
        cursor: pointer;
        cursor: hand;
        color: #efefef;
      }
      </style>

      <div class="card">

        <iron-image sizing="cover" preload src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>
        <div class="content">
          <h1>[[ajaxResponse.title]]</h1>
          <form>
            <button onclick="window.open('../contents.html','Table of Contents', 'height=400,width=600,top=200,left=320')" type="button">Table of Contents</button>
          </form>
            <iron-ajax
              auto
              url="../index.json"
              handle-as="json"
              last-response="{{ajaxResponse}}"
              debounce-duration="300">
            </iron-ajax>

          <p>Title: [[ajaxResponse.title]]</p>
          <p>Contributors: [[ajaxResponse.contributors]]</p>
          <p>Date Published: [[ajaxResponse.date]]</p>
        </div>
      </div>
    `;
  }

}

window.customElements.define('my-view1', MyView1);
