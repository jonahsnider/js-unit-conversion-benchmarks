# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 07 Dec 2023 09:25:28 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az1543-261 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `210`ns (175%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `212`ns (177%)        | `422`ns (352%)                 | `4,716,981`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `271`ns (226%)        | `582`ns (485%)                 | `3,690,037`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `380`ns (317%)        | `682`ns (568%)                 | `2,631,579`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `531`ns (443%)        | `1,123`ns (936%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `722`ns (602%)        | `1,424`ns (1,187%)             | `1,385,042`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `731`ns (609%)        | `1,532`ns (1,277%)             | `1,367,989`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,423`ns (1,186%)    | `2,925`ns (2,438%)             | `702,741`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,705`ns (2,254%)    | `4,943`ns (4,119%)             | `369,686`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,911`ns (4,092%)    | `9,743`ns (8,119%)             | `203,625`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `812`ns (100%)        | `913`ns (112%)                 | `1,231,527`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,647`ns (3,897%)   | `38,431`ns (4,733%)            | `31,599`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `39,775`ns (4,898%)   | `40,447`ns (4,981%)            | `25,141`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `210`ns (100%)        | `230`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (172%)        | `411`ns (196%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `493`ns (235%)        | `542`ns (258%)                 | `2,028,398`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (287%)        | `652`ns (310%)                 | `1,661,130`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,253`ns (597%)      | `1,343`ns (640%)               | `798,085`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,412`ns (672%)      | `1,523`ns (725%)               | `708,215`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,699`ns (2,238%)    | `4,963`ns (2,363%)             | `212,811`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `201`ns (100%)        | `222`ns (110%)                 | `4,975,124`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (180%)        | `422`ns (210%)                 | `2,770,083`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `432`ns (215%)        | `532`ns (265%)                 | `2,314,815`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,152`ns (573%)      | `1,352`ns (673%)               | `868,056`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,484`ns (738%)      | `1,945`ns (968%)               | `673,854`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,535`ns (2,754%)    | `5,935`ns (2,953%)             | `180,668`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,883`ns (2,927%)    | `7,107`ns (3,536%)             | `169,981`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)        | `651`ns (114%)                 | `1,751,313`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `613`ns (107%)        | `682`ns (119%)                 | `1,631,321`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `703`ns (123%)        | `793`ns (139%)                 | `1,422,475`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `292`ns (100%)        | `321`ns (110%)                 | `3,424,658`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `510`ns (175%)        | `562`ns (192%)                 | `1,960,784`/sec       |

<!-- endblock(results) -->
