export interface Article {
  id: string
  std?: {
    body?: string
    source_code?: string
    scrapper_name?: string
    title?: string
    publication_datetime?: string
    lang_code?: string
    url?: string
  }
  non_std?: {
    publisher_name?: string
    document_type?: string
    tags?: string
    source_name?: string
    byline?: string
    location?: string
    followers_count?: string
    retweet_count?: string
    word_count?: string
    in_reply_to_id?: string
    in_reply_to_screen_name?: string
  }
  vers?: {
    infer_language?: number
    process_sections?: number
    link_relations?: number
    classify_categories?: number
    translate_sections?: number
    word_count?: number
    extract_keywords?: number
    norm_keyboard?: number
  }
  out?: {
    infer_language?: string
    process_sections?: {
      title?: string
      body?: string
    }
    linked_relations?: {
      artists?: string[]
      festivals?: string[]
      competitions?: string[]
      cities?: string[]
      countries?: string[]
      regions?: string[]
    }
    classify_categories?: {
      relevance_scores?: {
        news_type_review?: number
        news_type_competition?: number
        news_type_release?: number
        "news_type_favorite-artist"?: number
        "news_type_favorite-song"?: number
        "news_type_favorite-album"?: number
        news_type_premiere?: number
        news_type_interview?: number
        news_type_masterclass?: number
        news_type_festival?: number
      }
      mean_scores?: {
        mean_score_news_type?: number
      }
      max_scores?: {
        max_score_news_type?: number
      }
      tags?: any
    }
    translate_sections?: {
      title?: string
    }
    word_count?: 53
    extract_keywords?: string
    norm_keywords?: string
  }
  _rid?: string
  _self?: string
  _etag?: string
  _attachments?: string
  _ts?: number
}