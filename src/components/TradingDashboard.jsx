import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const chartColors = {
  portfolio: '#00ff00',
  benchmark: '#ffa500',
  active: '#00ffff',
  drawdownPositive: '#0066cc',
  drawdownNegative: '#ff4444'
};