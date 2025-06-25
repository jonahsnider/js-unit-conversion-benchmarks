# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 25 Jun 2025 01:36:54 GMT with Node.js v22.16.0 (V8 v12.4.254.21-node.26) on fv-az1390-649 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (282%)        | `151`ns (302%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `231`ns (462%)        | `240`ns (480%)                 | `4,329,004`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `410`ns (820%)        | `411`ns (822%)                 | `2,439,024`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (962%)        | `491`ns (982%)                 | `2,079,002`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `571`ns (1,142%)      | `581`ns (1,162%)               | `1,751,313`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,124%)    | `1,082`ns (2,164%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,075`ns (4,150%)    | `2,095`ns (4,190%)             | `481,928`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `661`ns (100%)        | `742`ns (112%)                 | `1,512,859`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,122`ns (170%)      | `1,292`ns (195%)               | `891,266`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `25,583`ns (3,870%)   | `27,823`ns (4,209%)            | `39,088`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (180%)        | `120`ns (197%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (197%)        | `140`ns (230%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (197%)        | `121`ns (198%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (410%)        | `260`ns (426%)                 | `4,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (772%)        | `472`ns (774%)                 | `2,123,142`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,165`ns (3,549%)    | `2,185`ns (3,582%)             | `461,894`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `130`ns (260%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (1,102%)      | `572`ns (1,144%)               | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,112`ns (2,224%)    | `1,122`ns (2,244%)             | `899,281`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,027`ns (6,054%)    | `3,055`ns (6,110%)             | `330,360`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `210`ns (105%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (136%)        | `281`ns (141%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
