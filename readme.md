# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 20 Jun 2024 22:27:57 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az770-732 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `391`ns (326%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `501`ns (418%)        | `561`ns (468%)                 | `1,996,008`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (501%)        | `722`ns (602%)                 | `1,663,894`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (943%)      | `1,303`ns (1,086%)             | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,382`ns (1,152%)    | `1,854`ns (1,545%)             | `723,589`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,453`ns (1,211%)    | `1,874`ns (1,562%)             | `688,231`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,755`ns (2,296%)    | `3,177`ns (2,648%)             | `362,976`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,619`ns (3,849%)    | `5,871`ns (4,893%)             | `216,497`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,895`ns (60,746%)  | `74,943`ns (62,453%)           | `13,718`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `902`ns (100%)        | `1,122`ns (124%)               | `1,108,647`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,287`ns (4,023%)   | `52,287`ns (5,797%)            | `27,558`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,567`ns (9,486%)   | `158,079`ns (17,525%)          | `11,687`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `291`ns (208%)        | `341`ns (244%)                 | `3,436,426`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (322%)        | `511`ns (365%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (351%)        | `552`ns (394%)                 | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (909%)      | `1,402`ns (1,001%)             | `786,164`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,319`ns (3,085%)    | `4,551`ns (3,251%)             | `231,535`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,055`ns (26,468%)  | `37,695`ns (26,925%)           | `26,987`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `150`ns (125%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (250%)        | `321`ns (268%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `420`ns (350%)        | `490`ns (408%)                 | `2,380,952`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,282`ns (1,068%)    | `1,403`ns (1,169%)             | `780,031`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,633`ns (1,361%)    | `1,804`ns (1,503%)             | `612,370`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,335`ns (5,279%)    | `6,823`ns (5,686%)             | `157,853`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,063`ns (66,719%)  | `81,151`ns (67,626%)           | `12,490`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `561`ns (117%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `591`ns (123%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `581`ns (121%)        | `681`ns (142%)                 | `1,721,170`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `231`ns (100%)        | `260`ns (113%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (239%)        | `622`ns (269%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
