# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 13 Jan 2026 20:55:19 GMT with Node.js v24.12.0 (V8 v13.6.233.17-node.37) on runnervmi13qx (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `110`ns (220%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (420%)        | `220`ns (440%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `360`ns (720%)        | `361`ns (722%)                 | `2,777,778`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `531`ns (1,062%)      | `541`ns (1,082%)               | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (1,262%)      | `641`ns (1,282%)               | `1,584,786`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,104%)    | `1,102`ns (2,204%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,763`ns (3,526%)    | `1,793`ns (3,586%)             | `567,215`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `552`ns (100%)        | `621`ns (113%)                 | `1,811,594`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,683`ns (305%)      | `1,823`ns (330%)               | `594,177`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,207`ns (4,748%)   | `27,711`ns (5,020%)            | `38,158`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (233%)        | `140`ns (233%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `141`ns (235%)        | `150`ns (250%)                 | `7,092,199`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `150`ns (250%)        | `160`ns (267%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `190`ns (317%)        | `191`ns (318%)                 | `5,263,158`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `591`ns (985%)        | `592`ns (987%)                 | `1,692,047`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,893`ns (3,155%)    | `1,934`ns (3,223%)             | `528,262`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (278%)        | `130`ns (325%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (325%)        | `140`ns (350%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (325%)        | `131`ns (328%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (1,178%)      | `511`ns (1,278%)               | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,523`ns (3,808%)    | `1,543`ns (3,858%)             | `656,599`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,635`ns (6,588%)    | `2,715`ns (6,788%)             | `379,507`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `230`ns (115%)        | `231`ns (116%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (140%)        | `281`ns (141%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (220%)         | `91`ns (222%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
