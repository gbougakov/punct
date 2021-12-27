import CopyablePill from "../components/copyable-pill";
import {
  ApostropheKey,
  ColonKey,
  MinusKey,
  OptionKey,
  ShiftKey,
} from "../components/keys";
import { NextSeo } from "next-seo";

export default function IndexPage() {
  return (
    <>
      <NextSeo
        title="Punct"
        description="a cheatsheet for punctuation characters"
        canonical="https://punct.gbgk.me"
        openGraph={{
          url: "https://punct.gbgk.me",
          title: "Punct",
          description: "a cheatsheet for punctuation characters",
          images: [
            {
              url: "/punctog.png",
              width: 1200,
              height: 630,
              alt: "Punct spelled in keyboard keys",
              type: "image/png",
            },
          ],
          site_name: "Punct",
        }}
        twitter={{
          handle: "@gbougakov",
          cardType: "summary_large_image",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "favicon.png",
          },
          {
            rel: "apple-touch-icon",
            href: "favicon.png",
          },
        ]}
      />
      <div className={"p-10 flex justify-center"}>
        <div className={"max-w-content flex-grow"}>
          <h1 className="text-2xl font-bold">Punctuation</h1>
          <div className={"mt-12 space-y-12"}>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Hyphen</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"‐"}>&#45;</CopyablePill>
                <CopyablePill text={"&#45;"}>
                  <code>&amp;#45;</code>
                </CopyablePill>
                <CopyablePill text={"\\u002d"}>
                  <code>\u002d</code>
                </CopyablePill>
              </div>
              <p>Joins words and syllables.</p>
              <p className={"text-lg italic"}>
                This store is dog<em>&#45;</em>friendly.
              </p>
              <div className={"flex gap-2 flex-wrap"}>
                <MinusKey />
              </div>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Minus</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"−"}>&minus;</CopyablePill>
                <CopyablePill text={"&minus;"}>
                  <code>&amp;minus;</code>
                </CopyablePill>
                <CopyablePill text={"\\u2212"}>
                  <code>\u2212</code>
                </CopyablePill>
              </div>
              <p>Shows subtraction in a mathematical expression</p>
              <p className={"text-lg italic"}>
                4 <em>-</em> 2 = 2
              </p>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>En dash</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"–"}>&ndash;</CopyablePill>
                <CopyablePill text={"&ndash;"}>
                  <code>&amp;ndash;</code>
                </CopyablePill>
                <CopyablePill text={"\\u2013"}>
                  <code>\u2013</code>
                </CopyablePill>
              </div>
              <p>
                Can be used instead of the word "to" in date ranges, number
                ranges, scores, and directions.
              </p>
              <p className={"text-lg italic"}>
                In this week's poll, cats defeated dogs 10<em>&ndash;</em>1.
              </p>
              <div className={"flex gap-2 flex-wrap"}>
                <OptionKey />
                <MinusKey />
              </div>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Em dash</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"—"}>&mdash;</CopyablePill>
                <CopyablePill text={"&mdash;"}>
                  <code>&amp;mdash;</code>
                </CopyablePill>
                <CopyablePill text={"\\u2014"}>
                  <code>\u2014</code>
                </CopyablePill>
              </div>
              <p>
                Shows a break in the sentence or instead of a comma, semicolon,
                or colon.
              </p>
              <p className={"text-lg italic"}>
                There are two ways to collect your order <em>&mdash;</em> pick
                it up in store today, or get it delivered tomorrow.
              </p>
              <div className={"flex gap-2 flex-wrap"}>
                <ShiftKey />
                <OptionKey />
                <MinusKey />
              </div>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Guillemets</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"«"}>&laquo;</CopyablePill>
                <CopyablePill text={"&laquo;"}>
                  <code>&amp;laquo;</code>
                </CopyablePill>
                <CopyablePill text={"\\u00ab"}>
                  <code>\u00ab</code>
                </CopyablePill>
                <CopyablePill text={"»"}>&raquo;</CopyablePill>
                <CopyablePill text={"&raquo;"}>
                  <code>&amp;raquo;</code>
                </CopyablePill>
                <CopyablePill text={"\\u00bb"}>
                  <code>\u00bb</code>
                </CopyablePill>
              </div>
              <p>
                Top-level quotation marks in French and several Cyrillic
                languages.
              </p>
              <p className={"text-lg italic"}>
                <em>&laquo;</em>Мой дядя самых честных правил, ... Когда же чёрт
                возьмет тебя!<em>&raquo;</em> &mdash; Так думал молодой
                повеса...
              </p>
              <div className={"flex gap-2 flex-wrap items-center"}>
                <OptionKey />
                <ApostropheKey />
                <p className={"text-4xl px-4"}>~</p>
                <ShiftKey />
              </div>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Double quotation marks</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"“"}>&ldquo;</CopyablePill>
                <CopyablePill text={"&ldquo;"}>
                  <code>&amp;ldquo;</code>
                </CopyablePill>
                <CopyablePill text={"\\u201c"}>
                  <code>\u201c</code>
                </CopyablePill>
                <CopyablePill text={"”"}>&rdquo;</CopyablePill>
                <CopyablePill text={"&rdquo;"}>
                  <code>&amp;rdquo;</code>
                </CopyablePill>
                <CopyablePill text={"\\u201d"}>
                  <code>\u201d</code>
                </CopyablePill>
              </div>
              <p>
                Top-level quotation marks in English, second-level quotation
                marks in French and several Cyrillic languages.
              </p>
              <p className={"text-lg italic"}>
                <em>&ldquo;</em>Lorem ipsum...<em>&rdquo;</em> is a sample
                sentence often used as a placeholder text.
              </p>
              <p className={"text-lg italic"}>
                &laquo;Я по дороге домой зайду в <em>&ldquo;</em>Пятерочку
                <em>&rdquo;</em>, тебе взять что-нибудь?&raquo; &mdash; написал
                Петя.
              </p>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Single quotation marks</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"‘"}>&lsquo;</CopyablePill>
                <CopyablePill text={"&lsquo;"}>
                  <code>&amp;lsquo;</code>
                </CopyablePill>
                <CopyablePill text={"\\u8216"}>
                  <code>\u8216</code>
                </CopyablePill>
                <CopyablePill text={"’"}>&rsquo;</CopyablePill>
                <CopyablePill text={"&rsquo;"}>
                  <code>&amp;rsquo;</code>
                </CopyablePill>
                <CopyablePill text={"\\u8217"}>
                  <code>\u8217</code>
                </CopyablePill>
              </div>
              <p>Second-level quotation marks in English.</p>
              <p className={"text-lg italic"}>
                &ldquo;You can use <em>&lsquo;</em>Lorem ipsum...
                <em>&rsquo;</em> as a placeholder until Dave finishes the
                copy&rdquo; &mdash; said Anna.
              </p>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Quotation mark</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={'"'}>&quot;</CopyablePill>
                <CopyablePill text={"&quot;"}>
                  <code>&amp;quot;</code>
                </CopyablePill>
                <CopyablePill text={"\\u0022"}>
                  <code>\u0022</code>
                </CopyablePill>
              </div>
              <p>
                Simple typewriter quotation marks, used to declare strings in
                code.
              </p>
              <p className={"text-lg italic"}>
                Carol said <em>"</em>Go ahead<em>"</em> when I asked her if the
                launcher was ready.
              </p>
              <div className={"flex gap-2 flex-wrap"}>
                <ShiftKey />
                <ApostropheKey />
              </div>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Apostrophe</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"'"}>&apos;</CopyablePill>
                <CopyablePill text={"&apos;"}>
                  <code>&amp;apos;</code>
                </CopyablePill>
                <CopyablePill text={"\\u0027"}>
                  <code>\u0027</code>
                </CopyablePill>
              </div>
              <p>Indicates the omission of letters</p>
              <p className={"text-lg italic"}>
                Tomatoes aren<em>'</em>t vegetables.
              </p>
              <div className={"flex gap-2 flex-wrap"}>
                <ApostropheKey />
              </div>
            </div>
            <div className={"space-y-4"}>
              <h2 className={"text-4xl font-bold"}>Ellipsis</h2>
              <div className={"flex gap-2 flex-wrap"}>
                <CopyablePill text={"…"}>&hellip;</CopyablePill>
                <CopyablePill text={"&hellip;"}>
                  <code>&amp;hellip;</code>
                </CopyablePill>
                <CopyablePill text={"\\u2026"}>
                  <code>\u2026</code>
                </CopyablePill>
              </div>
              <p>
                Indicates the omission of a word, sentence or a large block of
                text.
              </p>
              <p className={"text-lg italic"}>
                Who would have thought<em>&hellip;</em>
              </p>
              <div className={"flex gap-2 flex-wrap"}>
                <OptionKey />
                <ColonKey />
              </div>
            </div>
          </div>
          <h1 className={"mt-16 text-2xl font-bold"}>Related resources</h1>
          <ul className={"list-disc list-inside mt-4 space-y-1"}>
            <li>
              <a href={"https://kirillbelyaev.com/s/"}>Whitespaces</a> by Kirill
              Belyaev
            </li>
            <li>
              <a href={"https://dev.w3.org/html5/html-author/charref"}>
                Character Entity Reference Chart
              </a>{" "}
              by W3C
            </li>
            <li>
              Inter <a href={"https://rsms.me/inter/#charset"}>Charset</a> and{" "}
              <a href={"https://rsms.me/inter/glyphs/"}>Glyph Browser</a> by
              Rasmus Andersson
            </li>
          </ul>
          <p className={"mt-16"}>
            by <a href={"https://gbgk.me"}>George Bougakov</a>
          </p>
        </div>
      </div>
    </>
  );
}
