# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 20 Nov 2023 21:46:52 GMT with Node.js v18.18.2 (V8 v10.2.154.26-node.26) on fv-az847-548 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `191`ns (172%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `251`ns (226%)        | `420`ns (378%)                 | `3,984,064`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `281`ns (253%)        | `471`ns (424%)                 | `3,558,719`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `391`ns (352%)        | `652`ns (587%)                 | `2,557,545`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `541`ns (487%)        | `1,152`ns (1,038%)             | `1,848,429`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `751`ns (677%)        | `1,563`ns (1,408%)             | `1,331,558`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `771`ns (695%)        | `1,483`ns (1,336%)             | `1,297,017`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,424`ns (1,283%)    | `2,827`ns (2,547%)             | `702,247`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,705`ns (2,437%)    | `5,131`ns (4,623%)             | `369,686`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,911`ns (4,424%)    | `9,695`ns (8,734%)             | `203,625`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `772`ns (100%)        | `852`ns (110%)                 | `1,295,337`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,471`ns (4,077%)   | `39,167`ns (5,073%)            | `31,775`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `40,223`ns (5,210%)   | `40,863`ns (5,293%)            | `24,861`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `200`ns (100%)        | `220`ns (110%)                 | `5,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (186%)        | `422`ns (211%)                 | `2,688,172`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `510`ns (255%)        | `561`ns (281%)                 | `1,960,784`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (291%)        | `651`ns (326%)                 | `1,718,213`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,252`ns (626%)      | `1,363`ns (682%)               | `798,722`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,314`ns (657%)      | `1,482`ns (741%)               | `761,035`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,719`ns (2,360%)    | `5,091`ns (2,546%)             | `211,909`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `181`ns (100%)        | `201`ns (111%)                 | `5,524,862`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (193%)        | `411`ns (227%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (222%)        | `481`ns (266%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,244`ns (687%)      | `1,402`ns (775%)               | `803,859`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,634`ns (903%)      | `1,995`ns (1,102%)             | `611,995`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,675`ns (3,135%)    | `6,091`ns (3,365%)             | `176,211`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,003`ns (3,317%)    | `6,935`ns (3,831%)             | `166,583`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `582`ns (100%)        | `652`ns (112%)                 | `1,718,213`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (105%)        | `672`ns (115%)                 | `1,636,661`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `702`ns (121%)        | `782`ns (134%)                 | `1,424,501`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `292`ns (100%)        | `321`ns (110%)                 | `3,424,658`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `522`ns (179%)        | `582`ns (199%)                 | `1,915,709`/sec       |

<!-- endblock(results) -->
