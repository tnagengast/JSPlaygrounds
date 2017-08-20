import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import collect from 'collect.js';
import crypto from 'crypto-js';
import immutable from 'immutable';
import moment from 'moment';
import vue from 'vue';

_.extend(window, {
	_,
	React,
	Component,
	axios,
	collect,
	crypto,
	immutable,
	moment,
	vue,
});
